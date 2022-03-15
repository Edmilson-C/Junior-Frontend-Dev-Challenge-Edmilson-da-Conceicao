/* eslint-disable consistent-return */
const url = 'https://glacial-harbor-51821.herokuapp.com/34100289-review-master-8dyme2.preview.eks.technoplus.link/api/v1/contacts'

export const requestContacts = async () => {
  try {
    const res = await fetch(url)
    const response = await res.json()

    return response.reduce((acc, item) => {
      const {
        id, name, email, phone, website, company, address
      } = item

      const categorias = company.type.split(' ')

      acc.push({
        id,
        name,
        email,
        website,
        empresa: company.name,
        phoneNum: phone,
        location: `${address.street}, ${address.city}`,
        categorias,
        codPostal: address.zipCode
      })

      return acc
    }, [])
  } catch (error) {
    // eslint-disable-next-line no-alert
    alert(`An error has occured while requesting contacts \n${error}`)
  }
}
