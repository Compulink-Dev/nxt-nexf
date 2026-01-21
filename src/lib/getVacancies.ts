import { getPayloadClient } from '@/lib/payloadClient'

export async function getVacancies() {
  try {
    const payload = await getPayloadClient()

    if (!payload) {
      return []
    }

    const vacancies = await payload.find({
      collection: 'vacancies',
      where: {
        status: {
          equals: 'active',
        },
      },
      sort: '-posted',
      limit: 20,
    })

    return vacancies.docs || []
  } catch (error) {
    console.error('Error fetching vacancies:', error)
    return []
  }
}
