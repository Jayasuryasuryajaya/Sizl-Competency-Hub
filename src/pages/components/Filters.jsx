import React from 'react';
import { useTranslation } from 'react-i18next';

const Filters = ({ filters = {}, setFilters, onAdd }) => {
  const { t } = useTranslation();

  const handleAddClick = () => {
    if (!filters.machine || !filters.date) {
      alert(t('Fill all input fields!'));
      return;
    }
    onAdd(filters);
    setFilters({ machine: '', date: null, output: 0 });
  };

  return (
    <div className="container my-4 d-flex justify-content-center">
      <div
        className="card shadow-sm p-4"
        style={{
          maxWidth: '600px',
          width: '100%',
          borderRadius: '12px',
          background: 'linear-gradient(135deg, #6a11cb 0%, #2575fc 100%)',
          color: 'white',
        }}
      >
        <h4
          className="text-center mb-4"
          style={{ fontWeight: '700', textShadow: '1px 1px 5px rgba(0,0,0,0.3)' }}
        >
          {t('FilterTitle') || 'Filter Machines'}
        </h4>

        <form
          className="row g-3 align-items-end justify-content-center"
          onSubmit={(e) => {
            e.preventDefault();
            handleAddClick();
          }}
        >
          <div className="col-sm-6">
            <label
              htmlFor="machineInput"
              className="form-label fw-bold text-white text-center d-block"
            >
              {t('machineName')}
            </label>
            <input
              type="text"
              className="form-control text-center"
              id="machineInput"
              placeholder={t('enterMachine')}
              value={filters.machine || ''}
              onChange={(e) => setFilters({ ...filters, machine: e.currentTarget.value })}
              style={{ fontWeight: '600' }}
            />
          </div>

          <div className="col-sm-6">
            <label
              htmlFor="dateInput"
              className="form-label fw-bold text-white text-center d-block"
            >
              {t('selectDate')}
            </label>
            <input
              type="date"
              className="form-control text-center"
              id="dateInput"
              value={
                filters.date
                  ? new Date(filters.date).toISOString().split('T')[0]
                  : ''
              }
              onChange={(e) =>
                setFilters({
                  ...filters,
                  date: e.target.value ? new Date(e.target.value) : null,
                })
              }
            />
          </div>

          <div className="col-12 text-center mt-3">
            <button type="submit" className="btn btn-light fw-bold px-4">
              {t('AddItems') || 'Add'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Filters;
