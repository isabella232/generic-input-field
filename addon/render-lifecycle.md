## Render Lifecycle

On component render, with more than collapsed limit(10 for example).
The component will show one item, displaying "10 items..".
As the user adds another item. The list will grow, but the 10 collapsed items,
will stay collapsed as 1 item. On the user adding another 5 items for example, 
and saving. Re-opening should show a new item collapsed item rendered "15 items ..".

## Tree structure

User's initial input:
`{1: { 12:{}, 13:{}, 14:{}, 15:{} }, 2: { 21:{}, 22:{} } }`

On returning to the input later, the tree structure will be, where collapse limit was 4:
`{1: { collapsed: { 12:{}, 13:{}, 14:{}, 15:{} } }, 2: { 21:{}, 22:{} } }`

On continuing to add to the input, the tree structure will be become:
`{1: { collapsed: { 12:{}, 13:{}, 14:{}, 15:{} } }, 16:{}, 17:{} , 2: { 21:{}, 22:{} } }`
