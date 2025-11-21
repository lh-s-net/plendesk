import { query, mutation } from "./_generated/server";
import { v } from "convex/values";

export const getActiveApps = query({
  args: {},
  handler: async (ctx) => {
    const apps = await ctx.db
      .query("apps")
      .filter((q) => q.eq(q.field("isActive"), true))
      .collect();
    return apps;
  },
});

export const getAllApps = query({
  args: {},
  handler: async (ctx) => {
    const apps = await ctx.db.query("apps").collect();
    return apps;
  },
});

export const addApp = mutation({
  args: {
    appId: v.string(),
    title: v.string(),
    description: v.string(),
    isActive: v.boolean(),
  },
  handler: async (ctx, args) => {
    const newAppId = await ctx.db.insert("apps", {
      appId: args.appId,
      title: args.title,
      description: args.description,
      isActive: args.isActive,
    });
    return newAppId;
  },
});

export const seedApps = mutation({
  args: {},
  handler: async (ctx) => {
    // Check if apps already exist
    const existingApps = await ctx.db.query("apps").collect();
    if (existingApps.length > 0) {
      return { success: false, message: "Apps already seeded" };
    }

    // Seed the three apps
    await ctx.db.insert("apps", {
      appId: "pd_planner",
      title: "Planner",
      description: "Plan your appointments and much more...",
      isActive: true,
    });

    await ctx.db.insert("apps", {
      appId: "pd_calc",
      title: "Calculator",
      description: "Calculate complex formulas quickly and easily...",
      isActive: true,
    });

    await ctx.db.insert("apps", {
      appId: "pd_mypd",
      title: "MyPD",
      description: "Your personal platform for all important information...",
      isActive: true,
    });

    return { success: true, message: "Apps seeded successfully" };
  },
});
