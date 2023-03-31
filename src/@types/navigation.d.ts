export type NavigationType = {
  navigation: NavigationItemType[]
  status: string
}

export type NavigationItemType = {
  id: number
  title: string
  url: string
  filter: CategoryItemType[]
  sort: SortItemType[]
}

export type CategoryItemType = {
  id: number
  title: string
  type: string
  subtitle: SubCategoryType[]
}

export type SubCategoryType = {
  id: number
  title: string
  type: string
}

export type SortItemType = {
  id: number
  title: string
  type: string
}
