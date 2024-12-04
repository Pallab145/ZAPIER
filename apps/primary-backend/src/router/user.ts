import { Router } from "express";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { signinSchema, signupSchema } from "../types";
import { JWT_PASSWORD } from "../config";
import { authMiddleware } from "../middleware";
import { PrismaClient } from '@prisma/client'

const db = new PrismaClient()


const router = Router();

router.post("/signup",async (req : Request,res : any) => {
    try {
        const body = req.body;
        const parseData = signupSchema.safeParse(body);
    
        if (!parseData.success) {
          return res.status(400).json({
            message: "Invalid inputs",
            errors: parseData.error.errors,
          });
        }
    
        const { name, email, password } = parseData.data;
    
        const userExists = await db.user.findFirst({ where: { email } });
        if (userExists) {
          return res.status(409).json({ message: "User already exists" });
        }
    
        const hashPassword = await bcrypt.hash(password, 10);
        await db.user.create({
          data: {
            name,
            email,
            password: hashPassword,
          },
        });
    
        return res.status(201).json({ message: "User creation successful" });
      } catch (error) {
        console.error("Error creating user:", error);
        return res.status(500).json({ message: "Internal server error" });
      }
});

router.post("/signin",async (req : any,res : any) => {
    try {
        const body = req.body;
        const parsedData = signinSchema.safeParse(body);
    
        if (!parsedData.success) {
          return res.status(400).json({
            message: "Invalid inputs",
            errors: parsedData.error.errors,
          });
        }
    
        const { email, password } = parsedData.data;
    
        const user = await db.user.findFirst({ where: { email } });
        if (!user) {
          return res.status(403).json({ message: "Invalid email or password" });
        }
    
        const isValidPassword = await bcrypt.compare(password, user.password);
        if (!isValidPassword) {
          return res.status(403).json({ message: "Invalid email or password" });
        }
    
        const token = jwt.sign(
          {
            id: user.id,
            email: user.email,
          },
          JWT_PASSWORD,
          { expiresIn: "1h" }
        );
    
        return res.json({ message: "Signin successful", token });
      } catch (error) {
        console.error("Error during signin:", error);
        return res.status(500).json({ message: "Internal server error" });
      }
});

// router.get("/",authMiddleware,async (req,res) => {
//     try {
//         // TODO: Fix the type
//         // @ts-ignore
//         const id = req.id;
    
//         const user = await db.user.findFirst({
//           where: { id },
//           select: { name: true, email: true },
//         });
    
//         if (!user) {
//           return res.status(404).json({ message: "User not found" });
//         }
    
//         return res.json({ user });
//       } catch (error) {
//         console.error("Error fetching user:", error);
//         return res.status(500).json({ message: "Internal server error" });
//       }
// })

export const userRouter = router;
