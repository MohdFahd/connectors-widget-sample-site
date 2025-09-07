import * as React from "react";
import { useEffect } from "react";

interface WidgetConfig {
  widgetDomain: string;
  origin: string;
  path: string;
  customAuth: boolean;
  projectId: string;
  tenantId: string;
  authToken: string;
  theme: string;
}

interface WidgetProps {
  config: WidgetConfig;
}

const Widget = ({ config }: WidgetProps) => {
  const iframeRef = React.useRef<HTMLIFrameElement>(null);

  useEffect(() => {
    const handleIframeLoad = () => {
      iframeRef?.current?.contentWindow?.postMessage(
        {
          eventType: "update_fastn_auth_token",
          authToken: config.authToken,
        },
        config.widgetDomain
      );
    };

    iframeRef?.current?.addEventListener("load", handleIframeLoad);
    return () => {
      iframeRef?.current?.removeEventListener("load", handleIframeLoad);
    };
  }, [iframeRef.current]);

  useEffect(() => {
    const handleMessage = (event) => {
      if (
        event.origin === config.widgetDomain &&
        event.data.eventType === "update_fastn_iframe_height"
      ) {
        const iframe = iframeRef.current;
        const height = event.data.height;
        if (iframe) iframe.style.height = height + "px";
      }
    };

    window.addEventListener("message", handleMessage);
    return () => {
      window.removeEventListener("message", handleMessage);
    };
  }, []);

  return (
    <div
      style={{
        marginLeft: "auto",
        marginTop: "200px",
        width: "1200px",
      }}
    >
      <iframe
        id="widget-iframe"
        ref={iframeRef}
        src={`${config.widgetDomain}?origin=${config.origin}&path=${config.path}&customAuth=${config.customAuth}&projectId=${config.projectId}&tenantId=${config.tenantId}&theme=${config.theme}`}
        title="Fastn Widget"
        width="1200px"
        height={"800px"}
        min-height="800px"
      ></iframe>
    </div>
  );
};

export default Widget;
