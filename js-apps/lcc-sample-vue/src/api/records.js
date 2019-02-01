import LCC from 'lightning-container'

const _accounts = [
  { id: '0001', name: 'Account 1' },
  { id: '0002', name: 'Account 2' },
  { id: '0003', name: 'Account 3' },
  { id: '0004', name: 'Account 4' },
  { id: '0005', name: 'Account 5' }
]

export default {
  getAccounts (callback) {
    if (process.env.NODE_ENV === 'production') {
      LCC.callApex(
        'RecordController.getAccounts',
        (result, event) => {
          if (event.status) {
            callback(result.map(account => {
              return {
                id: account.Id,
                name: account.Name,
                type: account.Type,
                numberOfEmployees: account.NumberOfEmployees
              }
            }))
          } else if (event.type === 'exception') {
            console.log(event.message + ' : ' + event.where)
          } else {
            console.log('Unknown Error', event)
          }
        },
        { escape: false }
      )
    } else {
      setTimeout(() => callback(_accounts), 100)
    }
  }
}
