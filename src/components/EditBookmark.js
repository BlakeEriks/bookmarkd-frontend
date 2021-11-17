import { useEffect, useState } from "react"
import { HorizontalFlexBox, HorizontalFlexBoxForm, VerticalFlexBox } from "../styles/Boxes"
import { Button, EditAddButton } from "../styles/Button"
import { CheckIcon, PlusIcon } from "../styles/Icons"
import { Input } from "../styles/Input"

const EditBookmark = ({formData, createBookmark, nameExists}) => {

    const [form, setForm] = useState({name: '', url: ''})

    useEffect( () => {
        setForm(formData)
    }, [formData])

    const onChange = event => {
        setForm({...form, [event.target.name]: event.target.value})
    }

    const handleSubmit = event => {
        event.preventDefault()
        setForm({name: '', url: ''})
        createBookmark(form)
    }

    return (
        <form onSubmit={handleSubmit}>
            <HorizontalFlexBox>
                <VerticalFlexBox>
                    <Input className="niceText" onChange={onChange} value={form.name} name='name' placeholder='Website'/>
                    <Input className="niceText" onChange={onChange} value={form.url} name='url' placeholder='Link' />
                </VerticalFlexBox>
                <EditAddButton width='50px'>
                    { nameExists(form.name) ? <CheckIcon /> : <PlusIcon />}
                </EditAddButton>
            </HorizontalFlexBox>
        </form>
    )
}

export default EditBookmark