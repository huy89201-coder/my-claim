export const formatYearMonthDay = (values: string | undefined) => {
  const dateObj = values ? new Date(values) : new Date();

  const year = dateObj.getFullYear();
  const month = String(dateObj.getMonth() + 1).padStart(2, "0");
  const day = String(dateObj.getDate()).padStart(2, "0");

  return `${year}-${month}-${day}`;
};

export const handleSubmitForm = async (values: FormData) => {
  const API_KEY = "dPjhocRSM2vHecjDED";
  const FRESHDESK_DOMAIN = "officience-support";

  const response = await fetch(
    `https://${FRESHDESK_DOMAIN}.freshdesk.com/api/v2/tickets`,
    {
      method: "POST",
      headers: {
        // "Content-Type": "application/json",
        Authorization: "Basic " + btoa(`${API_KEY}:x`),
      },
      // body: JSON.stringify({
      //   ...values,
      // }),
      body: values,
    }
  );

  if (response.ok) {
    const data = await response.json();
    alert("Ticket created successfully with ID: " + data.id);
  } else {
    alert("Failed to create a ticket. Status: " + response.status);
  }
};
