export async function analytics(ctx: Context, next: () => Promise<any>) {
  if (ctx.method.toUpperCase() === 'GET') {
    const { clients: { analytics } } = ctx 

    ctx.status = 200
    ctx.body = await analytics.getLiveUsers() 
    
    ctx.set ('cache-control', 'no-cache')
  }

  await next()
}
