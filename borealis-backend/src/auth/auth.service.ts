import { Injectable } from "@nestjs/common";
import { User, Bookmark } from '@prisma/client'
import { PrismaService } from "../prisma/prisma.service";

@Injectable()
export class AuthService {
  constructor(private prisma: PrismaService) {}


  signup() {
    return { message: "I have signed up! Abc" };
  }

  signin() {
    return { message: 'I have signed in! Why its not working'};

  }
}