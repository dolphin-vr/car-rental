import { Panel, LoadMore } from "./Button.styled"

export const Button = ({onClick})=>{
   return (
      <Panel>
         <LoadMore type="button" onClick={onClick}>
            Load more
         </LoadMore>
      </Panel>
   )
}