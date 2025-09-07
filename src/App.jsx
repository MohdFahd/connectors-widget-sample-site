import { useState } from "react";
import Widget from "./widget";
import "./App.css";

function App() {
  const [config, setConfig] = useState({
    widgetDomain: "https://live.fastn.ai/widget",
    origin: encodeURIComponent(window.location.origin),
    path: encodeURIComponent(window.location.pathname + window.location.search),
    customAuth: true,
    projectId: "6a4473b7-da73-48d2-9222-2f371b56e9aa",
    tenantId: "test-tenant",
    authToken:
      "eyJhbGciOiJSUzI1NiIsInR5cCIgOiAiSldUIiwia2lkIiA6ICJhTTB5UExrREQxZkFiTzlyRlQxVC1BcnktanJCUjE2YzlSbDJyV3M0OHhvIn0.eyJleHAiOjE3NTcyNDY4MDcsImlhdCI6MTc1NzI0NTAwNywiYXV0aF90aW1lIjoxNzU3MjQ0OTkzLCJqdGkiOiJvbnJ0YWM6MDliZjEzNmMtYTU4ZS00MTJlLTk1MjUtZmM1NDcwYzgxNWI2IiwiaXNzIjoiaHR0cHM6Ly9saXZlLmZhc3RuLmFpL2F1dGgvcmVhbG1zL2Zhc3RuIiwiYXVkIjoiYWNjb3VudCIsInN1YiI6ImI0NDA1NTAzLTEzNDUtNGFkOC1hODViLTllODRkNDQzYTI2MyIsInR5cCI6IkJlYXJlciIsImF6cCI6ImZhc3RuLWFwcCIsInNpZCI6ImI0YWQxMWNiLWJhNmMtNDc2Yy1iOGU3LWIxNjRhOGJjMTcyMCIsImFjciI6IjEiLCJhbGxvd2VkLW9yaWdpbnMiOlsiKiJdLCJyZWFsbV9hY2Nlc3MiOnsicm9sZXMiOlsiUFJPSkVDVCNhMDY5ODA3YS1lZjE3LTQ3Y2QtYjRiYy1lYzI5MjQ5MDQ5YmQjcmVhZCIsIlBST0pFQ1QjYjNjMjE4YTUtNDczNy00ZTg2LTg1Y2QtYzNjY2Q2OGNjZGI3I2FkbWluIiwiUFJPSkVDVCM0OTg3MDMyNS1mZDAyLTQ0OTctYWVmNy04ZjdmNDFlNGIyOGQjYWRtaW4iLCJQUk9KRUNUIzliZDBlNDI4LTVhMDctNDRjNi05NDc4LTcwZWE4MzE2NjI1NCNhZG1pbiIsIlBST0pFQ1QjMTA1NjMwZTQtNmEwMi00NGY3LTk4NDktMjhlNDVkYTExOTMzI2FkbWluIiwiUFJPSkVDVCM4ZDM3NzI1My02YzZkLTRiNDgtYTAyYS1lZTM0NWY3ZTFmZjcjYWRtaW4iLCJQUk9KRUNUIzY1ZGE1NzRiLTA3ODctNDBlNS05NjhmLWI2NDhlYWRhZmEzNCNhZG1pbiIsIlBST0pFQ1RfT1JHI2NkZDk3ODdhLWU5NjktNGVhYy05ZjUwLWNiMTU5NTBlMGI2ZSMzYTY2NTkxYi00NzFkLTRiYjItOGY0ZC1mYWNmMzNhNGNmY2MjYWRtaW4iLCJQUk9KRUNUIzkyNWMxNGJlLTI5MTMtNDU5OS1iNzFlLTM1M2NiMmFlMmRjMiNhZG1pbiIsIlBST0pFQ1RfT1JHIzc2ZGEwN2RmLTVkOTAtNGQ4Zi1iM2U3LTU2MzVlM2QzOWRkNyM3NmRhMDdkZi01ZDkwLTRkOGYtYjNlNy01NjM1ZTNkMzlkZDcjYWRtaW4iLCJQUk9KRUNUI2M2ZDFhNjVkLWFiMDAtNDE1Ni05NzkwLWVhNjNjOTQ2YTgwNCNhZG1pbiIsIlBST0pFQ1QjZWUyNzZhMzUtYmIyNC00ODUwLWIxOTEtYzExNzY4N2IwNDQ2I2FkbWluIiwiUFJPSkVDVCM1NTZlYWY0NS04ZGNjLTRhZjMtYjY3MS03YjZmNjVhOWQ2ZTIjYWRtaW4iLCJQUk9KRUNUIzgxZTQ1Nzk2LWI4MGQtNDIxZC1iMWRhLTIxM2MzNTgzOTMwMSNhZG1pbiIsIlBST0pFQ1QjNmI0NWYzZmItZTljYy00Y2FmLTk0NTMtM2MzMTI5NjhhMWNiI2FkbWluIiwib2ZmbGluZV9hY2Nlc3MiLCJQUk9KRUNUI2QxMWYwODY3LWI4YmUtNGZlMy1iZmU5LTFhMjk5YTU2YTBkNCNhZG1pbiIsIlBST0pFQ1QjMDZmZjhhN2ItMjY5Zi00ODU2LTgzODAtY2I2MWIwNzlhODU4I2FkbWluIiwiUFJPSkVDVF9PUkcjNzZkYTA3ZGYtNWQ5MC00ZDhmLWIzZTctNTYzNWUzZDM5ZGQ3IzExMWRlYjYxLWQ3OWEtNDY2MS05Y2JhLTg0YjVkYjJkZjk5MyNhZG1pbiIsIlBST0pFQ1QjMjRmZDI4NTYtMzg2Ny00ODk1LWIzOWEtNjk0NTJhYzA1Zjc0I21haW50YWluIiwidW1hX2F1dGhvcml6YXRpb24iLCJQUk9KRUNUIzQxMTVhYTBkLTk0YTQtNGZhNi04NGFlLWQ0NzVjZDhhNDMwNCNhZG1pbiIsImRlZmF1bHQtcm9sZXMtZmFzdG4iLCJQUk9KRUNUI2Q5YjRkZTc1LTEyNGItNDdmOS1iZDcwLTYxMjQ4M2IxN2RlMCNhZG1pbiIsIlBST0pFQ1QjYTk2NGE0NTEtNzUzOC00ZTM0LWFjNmMtNjkzYTJmMDg3ZmU0I2FkbWluIiwiUFJPSkVDVCM2MzY1MzJmYi0xNzJkLTQxNjQtYmIyMS00MzJjZTFmYmVlMzgjYWRtaW4iLCJQUk9KRUNUIzE2ZjFmNTA0LWNiZTItNGZjYS1iZjU1LWYxYzZiYTc0ZTU1YSNhZG1pbiIsIlBST0pFQ1QjYzFiOWI5MDctODIzMy00MjkyLTk1MDUtZjBiZjQ3NDFiMTE1I3JlYWQiLCJPUkcjNzZkYTA3ZGYtNWQ5MC00ZDhmLWIzZTctNTYzNWUzZDM5ZGQ3I2FkbWluIiwiUFJPSkVDVCMzMWY4ZWNmYi1hOWY5LTRiMTgtOWU4NS1hODRjZWZhZWY1OTUjbWFpbnRhaW4iLCJQUk9KRUNUI2IwMzQ4MTJhLTdkNzctNGU4ZS05NDVlLTEwNjY1NmIyNjc2ZSNhZG1pbiIsIlBST0pFQ1QjZDYwZTM2OTQtMmJhOS00MTRkLWEwZGQtMjAyZjE3MWU4MTBkI2FkbWluIiwiUFJPSkVDVCMxODUxZmQyNS1mOWEzLTQ1MjYtYTE2NS05M2MwMWJkNmU5YWMjYWRtaW4iLCJQUk9KRUNUIzExMWRlYjYxLWQ3OWEtNDY2MS05Y2JhLTg0YjVkYjJkZjk5MyNhZG1pbiIsIlBST0pFQ1QjNmE0NDczYjctZGE3My00OGQyLTkyMjItMmYzNzFiNTZlOWFhI2FkbWluIiwiUFJPSkVDVCM0M2FlYTQ0NS03NzcyLTRlNDUtYjFlOC01NDhiOTZjNGJmMmIjbWFpbnRhaW4iLCJPUkcjOGU2OWJhMmUtYTczMS00NDc4LWIzYWYtYzJhZDgyNGM1MmZjI2FkbWluIiwiUFJPSkVDVF9PUkcjNzZkYTA3ZGYtNWQ5MC00ZDhmLWIzZTctNTYzNWUzZDM5ZGQ3Izc2ZGEwN2RmLTVkOTAtNGQ4Zi1iM2U3LTU2MzVlM2QzOWRkNyNyZWFkIiwiUFJPSkVDVCNhNWFhOGM5NC02YTk0LTRlNTQtOGNjMC1kNzE3Mjc2YWI1NTcjbWFpbnRhaW4iLCJQUk9KRUNUI2FmOTA1MDRjLWI5ZmQtNDA0MS05N2M1LTc5ZDgyYjg3OTlhMyNhZG1pbiJdfSwicmVzb3VyY2VfYWNjZXNzIjp7ImFjY291bnQiOnsicm9sZXMiOlsibWFuYWdlLWFjY291bnQiLCJtYW5hZ2UtYWNjb3VudC1saW5rcyIsInZpZXctcHJvZmlsZSJdfX0sInNjb3BlIjoib3BlbmlkIHByb2ZpbGUgZW1haWwiLCJlbWFpbF92ZXJpZmllZCI6dHJ1ZSwibmFtZSI6Ik1vaCdkIEFsLVN1bGFtaSIsInByZWZlcnJlZF91c2VybmFtZSI6ImFsc3VsYW1pQGZhc3RuLmFpIiwiZ2l2ZW5fbmFtZSI6Ik1vaCdkIiwiZmFtaWx5X25hbWUiOiJBbC1TdWxhbWkiLCJlbWFpbCI6ImFsc3VsYW1pQGZhc3RuLmFpIn0.GffeSgaG_Tr4u1Nr2ZJQKKmnZSLFfIcRflN5PBkSxSQ70adLSEihboobIntCZ6N_qj7YgZImo-QbMjD_XZa57ASpddj4Hd4TP3m0xHlftWCdHzXOuN5reAmOOOoZGUFyMtq5B0wOBwy3aavaYeiKJ-gOj-_QCKKaHPQnbqY874fG719qHrT7YsibeldPfIGVUvXDwKOmpGRTTp7EGTmAQ_YK6aX8J3qq3msgW1akF0Akw1mxSX_0RiTXtG9HWZx5auV2BBOAEfqHTbelQYuSXytP8yxaSzXEd0iWyDLvKgagrEBPI_KdYyc60PGxcfKgR54HPZzpqoGeZxlt83RxEw",
    theme: "light",
  });

  const [showConfigEditor, setShowConfigEditor] = useState(false);

  const handleConfigChange = (field, value) => {
    setConfig(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const ConfigEditor = () => (
    <div style={{
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundColor: 'rgba(0, 0, 0, 0.5)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      zIndex: 1000
    }}>
      <div style={{
        backgroundColor: 'white',
        padding: '20px',
        borderRadius: '8px',
        maxWidth: '600px',
        width: '90%',
        maxHeight: '80vh',
        overflow: 'auto',
        boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)'
      }}>
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginBottom: '20px',
          borderBottom: '1px solid #eee',
          paddingBottom: '10px'
        }}>
          <h2 style={{ margin: 0, color: '#333' }}>Widget Configuration</h2>
          <button
            onClick={() => setShowConfigEditor(false)}
            style={{
              background: 'none',
              border: 'none',
              fontSize: '24px',
              cursor: 'pointer',
              color: '#666'
            }}
          >
            ×
          </button>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
          <div>
            <label style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold', color: '#333' }}>
              Widget Domain:
            </label>
            <input
              type="text"
              value={config.widgetDomain}
              onChange={(e) => handleConfigChange('widgetDomain', e.target.value)}
              style={{
                width: '100%',
                padding: '8px',
                border: '1px solid #ddd',
                borderRadius: '4px',
                fontSize: '14px'
              }}
            />
          </div>

          <div>
            <label style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold', color: '#333' }}>
              Origin:
            </label>
            <input
              type="text"
              value={config.origin}
              onChange={(e) => handleConfigChange('origin', e.target.value)}
              style={{
                width: '100%',
                padding: '8px',
                border: '1px solid #ddd',
                borderRadius: '4px',
                fontSize: '14px'
              }}
            />
          </div>

          <div>
            <label style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold', color: '#333' }}>
              Path:
            </label>
            <input
              type="text"
              value={config.path}
              onChange={(e) => handleConfigChange('path', e.target.value)}
              style={{
                width: '100%',
                padding: '8px',
                border: '1px solid #ddd',
                borderRadius: '4px',
                fontSize: '14px'
              }}
            />
          </div>

          <div>
            <label style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#333' }}>
              <input
                type="checkbox"
                checked={config.customAuth}
                onChange={(e) => handleConfigChange('customAuth', e.target.checked)}
                style={{ transform: 'scale(1.2)' }}
              />
              <span style={{ fontWeight: 'bold' }}>Custom Auth</span>
            </label>
          </div>

          <div>
            <label style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold', color: '#333' }}>
              Project ID:
            </label>
            <input
              type="text"
              value={config.projectId}
              onChange={(e) => handleConfigChange('projectId', e.target.value)}
              style={{
                width: '100%',
                padding: '8px',
                border: '1px solid #ddd',
                borderRadius: '4px',
                fontSize: '14px'
              }}
            />
          </div>

          <div>
            <label style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold', color: '#333' }}>
              Tenant ID:
            </label>
            <input
              type="text"
              value={config.tenantId}
              onChange={(e) => handleConfigChange('tenantId', e.target.value)}
              style={{
                width: '100%',
                padding: '8px',
                border: '1px solid #ddd',
                borderRadius: '4px',
                fontSize: '14px'
              }}
            />
          </div>

          <div>
            <label style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold', color: '#333' }}>
              Auth Token:
            </label>
            <textarea
              value={config.authToken}
              onChange={(e) => handleConfigChange('authToken', e.target.value)}
              rows={4}
              style={{
                width: '100%',
                padding: '8px',
                border: '1px solid #ddd',
                borderRadius: '4px',
                fontSize: '12px',
                fontFamily: 'monospace',
                resize: 'vertical'
              }}
            />
          </div>

          <div>
            <label style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold', color: '#333' }}>
              Theme:
            </label>
            <select
              value={config.theme}
              onChange={(e) => handleConfigChange('theme', e.target.value)}
              style={{
                width: '100%',
                padding: '8px',
                border: '1px solid #ddd',
                borderRadius: '4px',
                fontSize: '14px'
              }}
            >
              <option value="light">Light</option>
              <option value="dark">Dark</option>
            </select>
          </div>
        </div>

        <div style={{
          marginTop: '20px',
          display: 'flex',
          gap: '10px',
          justifyContent: 'flex-end'
        }}>
          <button
            onClick={() => setShowConfigEditor(false)}
            style={{
              padding: '10px 20px',
              backgroundColor: '#6c757d',
              color: 'white',
              border: 'none',
              borderRadius: '4px',
              cursor: 'pointer',
              fontSize: '14px'
            }}
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );

  return (
    <>
      <div style={{
        position: 'fixed',
        top: '20px',
        right: '20px',
        zIndex: 100
      }}>
        <button
          onClick={() => setShowConfigEditor(true)}
          style={{
            padding: '10px 20px',
            backgroundColor: '#007bff',
            color: 'white',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer',
            fontSize: '14px',
            boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)'
          }}
        >
          Edit Config
        </button>
      </div>

      {showConfigEditor && <ConfigEditor />}
      <Widget config={config} />
    </>
  );
}

export default App;
