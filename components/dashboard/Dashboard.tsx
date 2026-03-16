// components/dashboard/Dashboard.tsx
'use client'
import React, { useState } from 'react'
import DashboardChrome from './DashboardChrome'
import ExecutivePanel from './tabs/ExecutivePanel'
import ManagerPanel from './tabs/ManagerPanel'
import AnalystPanel from './tabs/AnalystPanel'
import styles from './Dashboard.module.css'

type Tab = 'executive' | 'manager' | 'analyst'

const Dashboard: React.FC = () => {
  const [activeTab, setActiveTab] = useState<Tab>('executive')
  const [resetAnalystTrigger, setResetAnalystTrigger] = useState(0)

  const handleTabChange = (tab: Tab) => {
    setActiveTab(tab)
    if (tab === 'analyst') {
      setResetAnalystTrigger((prev) => prev + 1)
    }
  }

  return (
    <DashboardChrome>
      <div className={styles.dbBody}>
        {/* Sidebar */}
        <div className={styles.dbSidebar}>
          <div className={styles.dbSidebarLabel}>Perspectives</div>
          
          <button 
            className={`${styles.dbTab} ${activeTab === 'executive' ? styles.active : ''}`}
            onClick={() => handleTabChange('executive')}
            aria-label="Switch to Executive Overview"
          >
            <span className="material-icons">dashboard</span>
            <div>
              <div className={styles.dbTabLabel}>Executive</div>
              <div className={styles.dbTabSub}>Overview</div>
            </div>
          </button>

          <button 
            className={`${styles.dbTab} ${activeTab === 'manager' ? styles.active : ''}`}
            onClick={() => handleTabChange('manager')}
            aria-label="Switch to Manager View"
          >
            <span className="material-icons">group</span>
            <div>
              <div className={styles.dbTabLabel}>Manager</div>
              <div className={styles.dbTabSub}>Live Activity</div>
            </div>
          </button>

          <button 
            className={`${styles.dbTab} ${activeTab === 'analyst' ? styles.active : ''}`}
            onClick={() => handleTabChange('analyst')}
            aria-label="Switch to Analyst Workflow"
          >
            <span className="material-icons">assignment</span>
            <div>
              <div className={styles.dbTabLabel}>Analyst</div>
              <div className={styles.dbTabSub}>Workflow</div>
            </div>
          </button>
        </div>

        {/* Content */}
        <div className={styles.dbContent}>
          {activeTab === 'executive' && <ExecutivePanel />}
          <ManagerPanel active={activeTab === 'manager'} />
          <AnalystPanel active={activeTab === 'analyst'} resetTrigger={resetAnalystTrigger} />
        </div>
      </div>
    </DashboardChrome>
  )
}

export default Dashboard
