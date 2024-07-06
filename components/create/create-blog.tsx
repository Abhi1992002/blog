"use client";

import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Tag } from "@prisma/client";
import { useState } from "react";
import React from "react";
import { Button } from "@/components/ui/button";
import { createBlog } from "@/actions/createBlog";
import { uploadImage } from "@/actions/uploadImage";
import toast from "react-hot-toast";

export const CreateBlog = () => {
  const [title, setTitle] = useState<string>("");
  const [content, setContent] = useState<string>("");
  const [tags, setTags] = useState<Tag>(null!);
  const [img, setImg] = useState<string>("");
  const [readTime, setReadTime] = useState<number>(0);
  const [href, setHref] = useState<string>("");
  const handleImageChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files) return;
    const file = e.target.files[0];

    const reader = new FileReader();
    reader.onloadend = () => {
      setImg(reader.result as string);
    };
    reader.readAsDataURL(file);
  };

  const blogHandler = async () => {
    if (!img) {
      toast.error("Image is required");
      return;
    }
    const id = toast.loading("Creating blog...");
    const { imageUrl } = await uploadImage(img);
    if (!imageUrl) {
      toast.error("Image upload failed", { id });
      setTitle("");
      setContent("");
      setImg("");
      setReadTime(0);
      return;
    }
    await createBlog({
      title,
      content,
      tag: tags,
      img: imageUrl,
      readTime,
      href,
    });
    toast.success("Blog created successfully", { id });
    setTitle("");
    setContent("");
    setImg("");
    setReadTime(0);
  };

  return (
    <div className={"w-[400px] mx-auto space-y-4 mt-20"}>
      <h1>Create Blog</h1>
      <Input
        placeholder={"Title"}
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />{" "}
      <Input
        placeholder={"href"}
        value={href}
        onChange={(e) => setHref(e.target.value)}
      />
      <Input
        placeholder={"content"}
        value={content}
        onChange={(e) => setContent(e.target.value)}
      />
      <Input
        placeholder={"read time"}
        value={readTime}
        type="number"
        onChange={(e) => setReadTime(Number(e.target.value))}
      />
      <Input
        placeholder={"img"}
        accept="image/*"
        type={"file"}
        onChange={handleImageChange}
      />
      <Select value={tags} onValueChange={(val) => setTags(val as Tag)}>
        <SelectTrigger className="w-[180px]">
          <SelectValue placeholder="Tags" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value={Tag.PROJECT}>{Tag.PROJECT}</SelectItem>
          <SelectItem value={Tag.THOUGHTS}>{Tag.THOUGHTS}</SelectItem>
          <SelectItem value={Tag.TOOLS}>{Tag.TOOLS}</SelectItem>
          <SelectItem value={Tag.CODE}>{Tag.CODE}</SelectItem>
        </SelectContent>
      </Select>
      <Button onClick={blogHandler}>Create Blog</Button>
    </div>
  );
};
