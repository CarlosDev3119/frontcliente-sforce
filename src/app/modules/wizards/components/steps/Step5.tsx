import React, {FC} from 'react'
import {KTIcon, toAbsoluteUrl} from '../../../../../_metronic/helpers'
import {ErrorMessage, Field} from 'formik'
import { useImageFile } from '../../../../hooks/useImageFile';

const Step5: FC = () => {

  const {previewImage, handleFileChange} = useImageFile();


  return (
    <div className='w-100'>
    <div className='pb-10 pb-lg-12'>
      <h2 className='fw-bolder text-dark'>Datos Legales: Acta Constitutiva</h2>
    </div>

    <div className='row'>
        <div className='col-lg-5'>

          <label
            className='btn btn-outline btn-outline-dashed btn-outline-default p-7 d-flex align-items-center'
            htmlFor='fileInput5'
          >
            <KTIcon iconName='folder' className='fs-3x me-5' />
            <span className='d-block fw-bold text-start'>
              <span className='text-dark fw-bolder d-block fs-4 mb-2'>Seleccionar Archivo</span>
              <span className='text-gray-400 fw-bold fs-6'>
                Acta constitutiva cargada
              </span>
            </span>
          </label>
          <input
            type='file'
            className='btn-check d-none'
            name='accountType'
            id='fileInput5'
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
      <label className='form-label required'>Número de acta</label>

      <Field type="text" name='actaNumber' className='form-control form-control-lg form-control-solid' />
      <div className='text-danger mt-2'>
        <ErrorMessage name='actaNumber' />
      </div>
    </div>

    <div className='fv-row mb-10'>
      <label className='d-flex align-items-center form-label'>
        <span className='required'>Número de notaría</span>
      </label>

      <Field
        type="text"
        name='noteNumber'
        className='form-control form-control-lg form-control-solid'
      />
      <div className='text-danger mt-2'>
        <ErrorMessage name='noteNumber' />
      </div>

    </div>

    <div className='fv-row mb-10'>
      <label className='form-label required'>Fecha de constitucion</label>

      <Field
        type='text'
        name='dateConstitution'
        className='form-control form-control-lg form-control-solid'
      />
      <div className='text-danger mt-2'>
        <ErrorMessage name='dateConstitution' />
      </div>
    </div>

    <div className='fv-row mb-10'>
      <label className='form-label required'>Fecha de alta</label>

      <Field
        type='text'
        name='altaDate'
        className='form-control form-control-lg form-control-solid'
      />
      <div className='text-danger mt-2'>
        <ErrorMessage name='altaDate' />
      </div>
    </div>

    <div className='fv-row mb-10'>
      <label className='form-label required'>Actividad ó Giro</label>

      <Field
        type='text'
        name='activity'
        className='form-control form-control-lg form-control-solid'
      />
      <div className='text-danger mt-2'>
        <ErrorMessage name='activity' />
      </div>
    </div>


  </div>
  )
}

export {Step5}
