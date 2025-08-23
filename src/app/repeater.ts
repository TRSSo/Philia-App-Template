import { createPlugin } from "philia/plugin"

export const repeater = new createPlugin("复读机", "发送 /复读 加内容来复读。").command(
  "复读",
  async (ctx, args) => {
    if (!args) {
      await ctx.reply("请发送要复读的内容")
      args = (await ctx.hook.promise()).event.summary
    }
    ctx.logger.info(ctx.event.user.id, "复读", args)
    await ctx.reply(args)
  },
)
