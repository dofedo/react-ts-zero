import { ChildAsFC } from './Child';

const Parent = () => {
    return(
        <ChildAsFC color='white' onClick={() => console.log("Clicked!")}>
            some text
        </ChildAsFC>
    )
};

export default Parent;