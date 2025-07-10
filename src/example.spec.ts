import { describe, expect, test } from 'vitest'

describe('empty test', () => {
  test('fake test', () => {
    const suma = 1 + 10
    expect(suma).toBe(11)
  })
})