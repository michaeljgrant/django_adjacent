import styled from 'styled-components'

const styledButton = styled.button`
    font-size: 24px;
    background-color: grey;
    
`

interface Props {
    cancelLabel: String;
}
const CancelButton = ({cancelLabel}:Props) => {
    return (
        <button>
            {cancelLabel}
        </button>
    )
}
 

export default CancelButton;