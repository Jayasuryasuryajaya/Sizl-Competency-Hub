import React from 'react';
import { useTranslation } from 'react-i18next';

const formatDateTime = (isoString) => {
  if (!isoString) return '';
  const date = new Date(isoString);

  const yyyy = date.getFullYear();
  const mm = String(date.getMonth() + 1).padStart(2, '0');
  const dd = String(date.getDate()).padStart(2, '0');

  const hh = String(date.getHours()).padStart(2, '0');
  const min = String(date.getMinutes()).padStart(2, '0');

  return `${yyyy}-${mm}-${dd} ${hh}:${min}`;
};

const MachineTable = ({ data }) => {
  const { t } = useTranslation();

  return (
    <div className="container my-5">
      <div 
        className="card shadow-sm p-4"
        style={{ 
          borderRadius: '12px', 
          background: 'linear-gradient(135deg, #6a11cb 0%, #2575fc 100%)', 
          color: 'white' 
        }}
      >
        <h5 
          className="text-center mb-4 fw-bold" 
          style={{ textShadow: '1px 1px 3px rgba(0,0,0,0.3)' }}
        >
          {t('Machine Table Title') || 'Machine Status Overview'}
        </h5>

        <div className="table-responsive">
          <table 
            className="table table-striped table-bordered table-hover text-center align-middle" 
            style={{ 
              backgroundColor: 'white', 
              borderRadius: '8px', 
              overflow: 'hidden',
              color: 'black',
            }}
          >
            <thead className="table-secondary">
              <tr>
                <th>{t('machineName')}</th>
                <th>{t('status')}</th>
                <th>{t('output')}</th>
                <th>{t('lastUpdated')}</th>
              </tr>
            </thead>
            <tbody>
              {data.map((item, index) => (
                <tr key={index}>
                  <td>{item.machine}</td>
                  <td>{item.status}</td>
                  <td>{item.output}</td>
                  <td>{formatDateTime(item.updatedAt)}</td> 
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default MachineTable;
