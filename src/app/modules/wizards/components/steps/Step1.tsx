/* eslint-disable jsx-a11y/anchor-is-valid */
import { useSelector } from "react-redux";
import {FC} from 'react'
import {KTIcon} from '../../../../../_metronic/helpers'
import { useImageFile } from '../../../../hooks/useImageFile';

export interface FileState {
  files: {
    rfc: string;
    fiel: string;
    acta: string;
    comprobante: string;
    accionaria: string;
    accionaria2: string;
    accionaria3: string;
  };
}

const Step1: FC = () => {

  const { 
    handleFileChange, response, handleFileChangeFIEL, handleFileChangeActa,
    handleFileChangeComprobante,
    handleFileChangeAccionaria,
    handleFileChangeAccionaria2,
    handleFileChangeAccionaria3,
  } = useImageFile();

  const fileState = useSelector( (state: FileState) => state.files );


  return (
    <div className='w-100'>
      <div className='pb-10 pb-lg-15'>
        <h2 className='fw-bolder d-flex align-items-center text-dark'>
          Registro de Empresas
          <i
            className='fas fa-exclamation-circle ms-2 fs-7'
            data-bs-toggle='tooltip'
            title='Billing is issued based on your selected account type'
          ></i>
        </h2>

        <div className='text-gray-400 fw-bold fs-6'>
          Inicia la carga de tus documentos.
        </div>
      </div>

      <div className='fv-row'>
        <div className='row'>


        <div className='col-lg-4'>
          
          <label
            className='btn btn-outline btn-outline-dashed btn-outline-default p-7 d-flex align-items-center'
            htmlFor='fileInputRFC'
          >
            <KTIcon iconName='folder' className='fs-3x me-5' />
            <span className='d-block fw-bold text-start'>
              <span className='text-dark fw-bolder d-block fs-4 mb-2'>{(fileState.rfc !== '')?"": "Subir Archivo"}</span>
              <span className='text-gray-400 fw-bold fs-6'>
                {
                  (fileState.rfc !== '')?"RFC Cargado": "Cédula de RFC"
                }
              </span>
            </span>
          </label>
          <input
            type='file'
            className='btn-check d-none'
            name='rfcFile'
            id='fileInputRFC'
            onChange={handleFileChange}
          />
        </div>

        <div className='col-lg-4'>
      
          <label
            className='btn btn-outline btn-outline-dashed btn-outline-default p-7 d-flex align-items-center'
            htmlFor='fileInput2'
          >
            <KTIcon iconName='folder' className='fs-3x me-5' />
            <span className='d-block fw-bold text-start'>
              <span className='text-dark fw-bolder d-block fs-4 mb-2'>{(fileState.fiel !== '')?"": "Subir Archivo"}</span>
              <span className='text-gray-400 fw-bold fs-6'>
              {
                  (fileState.fiel !== '')?"Fiel Cargado": "Certificado Fiel"
                }
              </span>
            </span>
          </label>
          <input
            type='file'
            className='btn-check d-none'
            name='fielFile'
            id='fileInput2'
            onChange={handleFileChangeFIEL}
          />
        </div>

        <div className='col-lg-4'>
      
          <label
            className='btn btn-outline btn-outline-dashed btn-outline-default p-7 d-flex align-items-center'
            htmlFor='actaFile'
          >
            <KTIcon iconName='folder' className='fs-3x me-5' />
            <span className='d-block fw-bold text-start'>
              <span className='text-dark fw-bolder d-block fs-4 mb-2'>{(fileState.acta !== '')?"": "Subir Archivo"}</span>
              <span className='text-gray-400 fw-bold fs-6'>
              {
                  (fileState.acta !== '')?"Acta Cargada": "Acta constitutiva"
                }
              </span>
            </span>
          </label>
          <input
            type='file'
            className='btn-check d-none'
            name='fielFile'
            id='actaFile'
            onChange={handleFileChangeActa}
          />
        </div>

        

        
        </div>
      </div>


      <div className='fv-row mt-3'>
        <div className='row'>

        {/* comprobante de domicilio */}
        <div className='col-lg-4'>
          
          <label
            className='btn btn-outline btn-outline-dashed btn-outline-default p-7 d-flex align-items-center'
            htmlFor='comprobanteFile'
          >
            <KTIcon iconName='folder' className='fs-3x me-5' />
            <span className='d-block fw-bold text-start'>
              <span className='text-dark fw-bolder d-block fs-4 mb-2'>{(fileState.comprobante !== '')?"": "Subir Archivo"}</span>
              <span className='text-gray-400 fw-bold fs-6'>
                {
                  (fileState.comprobante !== '')?"Comprobante Cargado": "Comprobante de domicilio"
                }
              </span>
            </span>
          </label>
          <input
            type='file'
            className='btn-check d-none'
            name='comprobanteFile'
            id='comprobanteFile'
            onChange={handleFileChangeComprobante}
          />
        </div>

        {/* accionaria */}
        <div className='col-lg-4'>
      
          <label
            className='btn btn-outline btn-outline-dashed btn-outline-default p-7 d-flex align-items-center'
            htmlFor='accionariaFile'
          >
            <KTIcon iconName='folder' className='fs-3x me-5' />
            <span className='d-block fw-bold text-start'>
              <span className='text-dark fw-bolder d-block fs-4 mb-2'>{(fileState.accionaria !== '')?"": "Subir Archivo"}</span>
              <span className='text-gray-400 fw-bold fs-6'>
              {
                  (fileState.accionaria !== '')?"Accionaria Cargada": "Tabla Accionaria"
                }
              </span>
            </span>
          </label>
          <input
            type='file'
            className='btn-check d-none'
            name='accionariaFile'
            id='accionariaFile'
            onChange={handleFileChangeAccionaria}
          />
        </div>


    {/* accionaria 2 */}
    <div className='col-lg-4'>
      
      <label
        className='btn btn-outline btn-outline-dashed btn-outline-default p-7 d-flex align-items-center'
        htmlFor='accionariaFile2'
      >
        <KTIcon iconName='folder' className='fs-3x me-5' />
        <span className='d-block fw-bold text-start'>
          <span className='text-dark fw-bolder d-block fs-4 mb-2'>{(fileState.accionaria2 !== '')?"": "Subir Archivo"}</span>
          <span className='text-gray-400 fw-bold fs-6'>
          {
              (fileState.accionaria2 !== '')?"Accionaria 2 Cargada": "Tabla Accionaria 2"
            }
          </span>
        </span>
      </label>
      <input
        type='file'
        className='btn-check d-none'
        name='accionariaFile2'
        id='accionariaFile2'
        onChange={handleFileChangeAccionaria2}
      />
    </div>

        {/* accionaria 3 */}
        <div className='col-lg-4 mt-3'>
      
          <label
            className='btn btn-outline btn-outline-dashed btn-outline-default p-7 d-flex align-items-center'
            htmlFor='accionariaFile3'
          >
            <KTIcon iconName='folder' className='fs-3x me-5' />
            <span className='d-block fw-bold text-start'>
              <span className='text-dark fw-bolder d-block fs-4 mb-2'>{(fileState.accionaria3 !== '')?"": "Subir Archivo"}</span>
              <span className='text-gray-400 fw-bold fs-6'>
              {
                  (fileState.accionaria3 !== '')?"Accionaria 3 Cargada": "Tabla Accionaria 3"
                }
              </span>
            </span>
          </label>
          <input
            type='file'
            className='btn-check d-none'
            name='accionariaFile3'
            id='accionariaFile3'
            onChange={handleFileChangeAccionaria3}
          />
        </div>

        </div>
      </div>
    </div>
  )
}

export {Step1}
