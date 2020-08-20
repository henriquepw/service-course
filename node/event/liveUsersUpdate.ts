import { EventContext } from '@vtex/api'

import { Clients } from '../clients/index'

export async function updateLiveUsers(ctx: EventContext<Clients>) {
  const liveUsersProducts = await ctx.clients.analytics.getLiveUsers()
  console.log('LIVE USERS: ', liveUsersProducts)

  return true
} 
