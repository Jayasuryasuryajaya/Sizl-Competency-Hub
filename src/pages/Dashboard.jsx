import React, { useState } from 'react';
import { Title, Container, Center, Loader, Space } from '@mantine/core';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import LanguageSelect from './components/LanguageSelector';
import Filters from './components/Filters';
import Chart from './components/Chart.jsx';
import MachineTable from './components/MachineTable';
import { useProductionData } from '../hooks/useProductionData';

// Animate container and children
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      when: 'beforeChildren',
      staggerChildren: 0.3,
      ease: 'easeInOut',
    },
  },
};

// Individual motion styles
const fromTop = {
  hidden: { opacity: 0, y: -40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeInOut' } },
};

const fromLeft = {
  hidden: { opacity: 0, x: -60 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: 'easeInOut' } },
};

const fromRight = {
  hidden: { opacity: 0, x: 60 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: 'easeInOut' } },
};

const fromBottom = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeInOut' } },
};

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 1, ease: 'easeInOut' } },
};

const Dashboard = () => {
  const { t, i18n } = useTranslation();

  const [filters, setFilters] = useState({ machine: '', date: null });
  const [machinesData, setMachinesData] = useState([]);
  const { data, isLoading, isError } = useProductionData();

  const handleAddMachine = (newEntry) => {
    const newMachine = {
      machine: newEntry.machine,
      status: 'New',
      output: 0,
      updatedAt: new Date().toISOString(),
      date: newEntry.date ? newEntry.date.toISOString().split('T')[0] : '',
    };
    setMachinesData((prev) => [...prev, newMachine]);
  };

  const combinedTableData = data?.tableData
    ? [...data.tableData, ...machinesData]
    : machinesData;

  return (
    <Container size="lg" className="my-5 container-fluid mt-0 pt-5">
      <motion.div
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        <motion.div variants={fromTop}>
          <Title order={2} align="center" mb="sm" className="text-primary">
            {t('pageTitle')}
          </Title>
        </motion.div>

        <motion.div variants={fromTop}>
          <Center mb="md">
            <LanguageSelect
              value={i18n.language}
              onChange={(lang) => i18n.changeLanguage(lang)}
              data={[
                { value: 'en', label: 'English' },
                { value: 'ko', label: '한국어' },
              ]}
            />
          </Center>
        </motion.div>

        <motion.div variants={fromLeft}>
          <Filters filters={filters} setFilters={setFilters} onAdd={handleAddMachine} />
        </motion.div>

        <Space h="md" />

        {isLoading && (
          <motion.div variants={fromBottom}>
            <Center className="d-flex align-items-center" style={{ height: '60vh', flexDirection: 'column' }}>
              <Loader variant="dots" size="lg" />
              <span className="mt-3">{t('loading')}</span>
            </Center>
          </motion.div>
        )}

        {isError && (
          <motion.div variants={fromBottom}>
            <Center style={{ minHeight: 200 }}>
              <p className="text-danger">{t('error')}</p>
            </Center>
          </motion.div>
        )}

        {!isLoading && !isError && data && (
          <>
            <motion.div variants={fromRight}>
              <div className="mb-5">
                <MachineTable data={combinedTableData} />
              </div>
            </motion.div>

            <motion.div variants={fromBottom}>
              <Chart data={data.chartData} />
            </motion.div>
          </>
        )}

        <motion.footer
          variants={fadeUp}
          style={{
            marginTop: '4rem',
            textAlign: 'center',
            padding: '1rem',
            borderTop: '1px solid #ddd',
            fontSize: '0.9rem',
          }}
        >
          <p>© {new Date().getFullYear()} Created by <strong>Jaya Surya</strong></p>
          <p>Email: <a href="mailto:njayasurya001@gmail.com">njayasurya001@gmail.com</a> | Phone: <a href="tel:7200877947">7200877947</a></p>
        </motion.footer>
      </motion.div>
    </Container>
  );
};

export default Dashboard;
