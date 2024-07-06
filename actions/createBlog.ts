"use server";
import { Post } from "@prisma/client";
import { db } from "@/lib/db";

export type CreateBlogType = Omit<
  Post,
  "id" | "likes" | "createdAt" | "updatedAt"
>;

export async function createBlog({
  title,
  content,
  tag,
  img,
  readTime,
  href,
}: CreateBlogType) {
  try {
    await db.post.create({
      data: {
        title,
        content,
        tag,
        img,
        readTime,
        href,
      },
    });

    return { message: "Blog created successfully" };
  } catch (error) {
    return { error: "Blog creation failed" };
  }
}
