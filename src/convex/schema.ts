import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";

export default defineSchema({
  apps: defineTable({
    appId: v.string(),
    title: v.string(),
    description: v.string(),
    isActive: v.boolean(),
  }).index("by_appId", ["appId"]),
});
