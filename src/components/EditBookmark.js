import { useState } from "react"
import { HorizontalFlexBox, HorizontalFlexBoxForm, VerticalFlexBox } from "../styles/Boxes"
import { Button, EditAddButton } from "../styles/Button"
import { PlusIcon } from "../styles/Icons"
import { Input } from "../styles/Input"

const EditBookmark = ({createBookmark}) => {

    const [form, setForm] = useState({name: '', url: ''})

    const onChange = event => {
        setForm({...form, [event.target.name]: event.target.value})
    }

    const handleSubmit = event => {
        event.preventDefault()
        createBookmark(form)
    }

    return (
        <form onSubmit={handleSubmit}>
            <HorizontalFlexBox>
                <VerticalFlexBox>
                    <Input onChange={onChange} value={form.name} name='name' placeholder='Website'/>
                    <Input onChange={onChange} value={form.url} name='url' placeholder='Link' />
                </VerticalFlexBox>
                <EditAddButton>
                    <PlusIcon />
                </EditAddButton>
            </HorizontalFlexBox>
        </form>
    )
}

export default EditBookmark