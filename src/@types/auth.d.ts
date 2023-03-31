export type AuthType = {
  data: null | AuthDataType
  status: string
}

export type AuthDataType = {
  _id: string
  fullName: string
  avatarUrl: string | null
  email: string
  role: string
  createdAt: string
  updatedAt: string
  __v: number
}

export type RegisterType = {
  fullName: string
  email: string
  password: string
}

export type LoginType = {
  email: string
  password: string
}