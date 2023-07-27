import {FC} from 'react'
import { ErrorMessage, Field } from 'formik'

const Step10: FC = () => {

  return (
    <div className='w-100'>
    <div className='pb-10 pb-lg-12'>
      <h2 className='fw-bolder text-dark'>Datos de contacto</h2>
    </div>


    <div className='fv-row mb-10 mt-3'>
      <label className='form-label required'>Nombre</label>

      <Field type="text" name='nombrefull' className='form-control form-control-lg form-control-solid' />
      <div className='text-danger mt-2'>
        <ErrorMessage name='nombrefull' />
      </div>
    </div>

    <div className='fv-row mb-10'>
      <label className='d-flex align-items-center form-label'>
        <span className='required'>Correo electrónico</span>
      </label>

      <Field
        type="text"
        name='correo'
        className='form-control form-control-lg form-control-solid'
      />
      <div className='text-danger mt-2'>
        <ErrorMessage name='correo' />
      </div>

    </div>

    <div className='fv-row mb-10'>
      <label className='form-label required'>Teléfono (10 digitos)</label>

      <Field
        type='text'
        name='numero'
        className='form-control form-control-lg form-control-solid'
      />
      <div className='text-danger mt-2'>
        <ErrorMessage name='numero' />
      </div>
    </div>


  </div>
  )
}

export {Step10}
