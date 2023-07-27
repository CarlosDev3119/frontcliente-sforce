import {FC} from 'react'
import { ErrorMessage, Field } from 'formik'
import { KTIcon } from '../../../../../_metronic/helpers'
import { useImageFile } from '../../../../hooks/useImageFile';

const Step6: FC = () => {

  const {previewImage, handleFileChange} = useImageFile();

  return (
    <div className='w-100'>
    <div className='pb-10 pb-lg-12'>
      <h2 className='fw-bolder text-dark'>Tabla Accionaria</h2>
    </div>

    <div className='row'>
        <div className='col-lg-5'>

          <label
            className='btn btn-outline btn-outline-dashed btn-outline-default p-7 d-flex align-items-center'
            htmlFor='fileInput6'
          >
            <KTIcon iconName='folder' className='fs-3x me-5' />
            <span className='d-block fw-bold text-start'>
              <span className='text-dark fw-bolder d-block fs-4 mb-2'>Seleccionar Archivo</span>
              <span className='text-gray-400 fw-bold fs-6'>
                Identificación cargada
              </span>
            </span>
          </label>
          <input
            type='file'
            className='btn-check d-none'
            name='accountType'
            id='fileInput6'
            onChange={handleFileChange}
          />
        </div>

      {
        previewImage && (
            <div className='col-lg-6'>
            <Field
              type='text'
              className='btn-check'
              name='imageComprobante'
              value='imageFiel'
              id='kt_create_account_form_account_type_corporate'
            />
            <label
              className='btn btn-outline btn-outline-dashed btn-outline-default p-7 d-flex align-items-center'
              htmlFor='kt_create_account_form_account_type_corporate'
            >
              <div style={{
                display: 'flex',
                justifyContent: 'center',  // Centrar horizontalmente
                alignItems: 'center',      // Centrar verticalmente
                maxWidth: '100%',
                overflow: 'hidden',
                height: '100px',           // Altura fija de 100px
              }}>
                  <img src={previewImage} alt="" style={{ width: 'auto', height: '100%' }} />
              </div>
            </label>
        </div>
        )
      }

      

    </div>

    <div className='fv-row mb-10 mt-3'>
      <label className='form-label required'>Nombre Completo</label>

      <Field type="text" name='namefull' className='form-control form-control-lg form-control-solid' />
      <div className='text-danger mt-2'>
        <ErrorMessage name='namefull' />
      </div>
    </div>

    <div className='fv-row mb-10'>
      <label className='d-flex align-items-center form-label'>
        <span className='required'>CURP</span>
      </label>

      <Field
        type="text"
        name='curp'
        className='form-control form-control-lg form-control-solid'
      />
      <div className='text-danger mt-2'>
        <ErrorMessage name='curp' />
      </div>

    </div>

    <div className='fv-row mb-10'>
      <label className='form-label required'>% de Participacion</label>

      <Field
        type='text'
        name='porcentaje'
        className='form-control form-control-lg form-control-solid'
      />
      <div className='text-danger mt-2'>
        <ErrorMessage name='porcentaje' />
      </div>
    </div>


  </div>
  )
}

export {Step6}
