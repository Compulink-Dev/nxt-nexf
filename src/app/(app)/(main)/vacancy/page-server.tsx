import { getVacancies } from '@/lib/getVacancies'
import VacancyPageClient from './vacancy-client'

export default async function VacancyPage() {
  const vacancies = await getVacancies()

  return <VacancyPageClient vacancies={vacancies} />
}
