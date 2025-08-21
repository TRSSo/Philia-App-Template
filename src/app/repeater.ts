import { createPlugin } from "philia/plugin"

export const repeater = new createPlugin("复读机", "发送 /复读 加内容来复读。").command(
  "复读",
  (ctx, args) => {
    ctx.logger.info(ctx.event.user.id, "复读", args)
    ctx.reply(args)
  },
)
