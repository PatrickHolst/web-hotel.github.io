import React, { useEffect } from "react";
import $ from "jquery"; // Import jQuery

const ExtraServices = () => {
  useEffect(() => {
    const baseUrl = "https://online.bookvisit.com/v2/widget/getextraswidget";
    $.ajax({
      dataType: "json",
      url: `${baseUrl}?channelId=90a44df0-1533-463b-93e2-721d2f5c9adf&openOption=redirect&displayCalendarStartsAtFirstAvailableDay=false&culture=sv-SE&layout=Standard1ColumnSimplify&containerId=widgetContainer&currency=SEK`,
      xhrFields: { withCredentials: true },
      success: function (data) {
        $("#widgetContainer").html(data.Widget);
      },
    });

    return () => {
      $("#widgetContainer").html(""); // Clear the widgetContainer when the component unmounts
    };
  }, []);

  return <div id="widgetContainer"></div>; // Render the widgetContainer div
};

export default ExtraServices;
