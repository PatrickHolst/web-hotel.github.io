import React, { useEffect } from "react";
import "../index.css";

const Booking = () => {
  useEffect(() => {
    // Load BaseScript
    const baseScript = document.createElement("script");
    baseScript.src =
      "//online.bookvisit.com/Content/widget/accommodation_widget.bundle.js";
    baseScript.async = true;
    document.body.appendChild(baseScript);

    // Load Script
    const script = document.createElement("script");
    script.type = "text/javascript";
    script.charset = "UTF-8";
    script.innerHTML = `
      const config = {};
      config.channelId = "90a44df0-1533-463b-93e2-721d2f5c9adf";
      config.widgetLayout = "Standard1Column";
      config.WidgetContainerId = "widgetContainer";
      config.promoCode = "true";
      config.corpCode = "false";
      config.agentCode = "false";
      config.openOption = "redirect";
      config.loginLink = "false";
      config.currency = "SEK";
      config.languageCulture = "sv-SE";
      config.accommodationTypePicker = "false";
      config.type = "single_property";
      
      function initWidget() {
        if (typeof BV !== "undefined") {
          BV.SPWidget({...config});
        } else {
          setTimeout(initWidget, 100);
        }
      }
      
      initWidget();
    `;
    document.body.appendChild(script);

    // Cleanup
    return () => {
      document.body.removeChild(baseScript);
      document.body.removeChild(script);
    };
  }, []);

  return <div id="widgetContainer"></div>;
};

export default Booking;
