export const FetchBill = async (values: any) => {
  const response = await fetch(`/api/users/billFetch`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(values),
  });
};

export const fetchData = async () => {
  try {
    const response = await fetch(`/api/users/userData`, {
      headers: {
        "Content-Type": "application/json",
      },
      cache: "reload",
    });
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
};
