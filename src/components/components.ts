import { createBlock } from 'blocks'
import { DividerBlock } from 'types'

const divider = (block_id?:string) => createBlock({
    type: 'divider',
    ...(block_id && { block_id })
})


export const components = {
    divider
}