describe('useTransaction_function', () => {
  it('test_fetches_data_successfully', async () => {
    const mockData = { id: 1, amount: 100 }
    const mockGetTransaction = jest.fn().mockResolvedValue(mockData)
    const { transaction, isLoading } = useTransaction(1)
    expect(mockGetTransaction).toHaveBeenCalledWith(1)
    expect(transaction).toEqual(mockData)
    expect(isLoading).toBe(false)
  })

  it('test_sets_transaction_state', async () => {
    const mockData = { id: 1, amount: 100 }
    const mockGetTransaction = jest.fn().mockResolvedValue(mockData)
    const { transaction } = useTransaction(1)
    expect(mockGetTransaction).toHaveBeenCalledWith(1)
    expect(transaction).toEqual(mockData)
  })

  it('test_sets_is_loading_state_to_false', async () => {
    const mockData = { id: 1, amount: 100 }
    const mockGetTransaction = jest.fn().mockResolvedValue(mockData)
    const { isLoading } = useTransaction(1)
    expect(mockGetTransaction).toHaveBeenCalledWith(1)
    expect(isLoading).toBe(false)
  })

  it('test_does_not_fetch_data_if_id_is_falsy', async () => {
    const mockGetTransaction = jest.fn()
    const { transaction, isLoading } = useTransaction(null)
    expect(mockGetTransaction).not.toHaveBeenCalled()
    expect(transaction).toEqual([])
    expect(isLoading).toBe(true)
  })

  it('test_returns_empty_array_if_id_is_falsy', async () => {
    const mockGetTransaction = jest.fn()
    const { transaction } = useTransaction(null)
    expect(mockGetTransaction).not.toHaveBeenCalled()
    expect(transaction).toEqual([])
  })

  it('test_fetches_data_again_if_id_changes', async () => {
    const mockData1 = { id: 1, amount: 100 }
    const mockData2 = { id: 2, amount: 200 }
    const mockGetTransaction = jest.fn().mockResolvedValueOnce(mockData1).mockResolvedValueOnce(mockData2)
    const { transaction, isLoading, setTransaction } = useTransaction(1)
    expect(mockGetTransaction).toHaveBeenCalledWith(1)
    expect(transaction).toEqual(mockData1)
    expect(isLoading).toBe(false)
    setTransaction([])
    const { transaction: newTransaction } = useTransaction(2)
    expect(mockGetTransaction).toHaveBeenCalledWith(2)
    expect(newTransaction).toEqual(mockData2)
  })
})
