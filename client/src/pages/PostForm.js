import React from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import * as Yup from 'yup'
import { usePosts } from '../context/postsContext'
import { useNavigate } from 'react-router-dom'


function PostForm() {
    const { createPost } = usePosts()
    const navigate = useNavigate()
    return (
        <div>
            <h2 className='text-white'>Formulario</h2>
            <Formik
                initialValues={{
                    title: "",
                    description: ""
                }}
                validationSchema={Yup.object({
                    title: Yup.string().required('El titulo es requerido y debe ser de tipo Texto'),
                    description: Yup.string().required('La descripcion es requerida y debe ser de tipo Texto')
                })}
                onSubmit={async (values, actions) => {
                    await createPost(values)
                    //    una vez creado el post no redireccina al home 
                    navigate('/')
                }}
            >
                {/* handleSubmit es una funcion propia de FORMIK */}
                {({ handleSubmit }) => (
                    <Form onSubmit={handleSubmit}>
                        <Field name="title" placeholder="title" className='px-3 py-2 focus:outline-none bg-gray-600 text-white w-full'></Field>
                        <ErrorMessage component="p" className='text-red-600 text-sm' name='title' /><br /><br />
                        <Field name="description" placeholder="description" className='px-3 py-2 focus:outline-none bg-gray-600 text-white w-full'></Field>
                        <ErrorMessage component="p" className='text-red-600 text-sm' name='description' />
                        <button type='submit' className='text-white'>Save</button>
                    </Form>
                )}
            </Formik>

        </div>
    )
}
export { PostForm }