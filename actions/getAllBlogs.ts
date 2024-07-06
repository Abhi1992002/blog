"use server";

import { db } from "@/lib/db";

export async function getAllBlogs() {
  try {
    const blogs = await db.post.findMany({
      orderBy: {
        createdAt: "desc",
      },
    });

    return { blogs };
  } catch (error) {
    return { error: "Failed to fetch blogs" };
  }
}
