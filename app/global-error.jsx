"use client";

export default function GlobalError({ error, reset }) {
  console.error(error);

  return (
    <html>
      <body style={{ padding: 24, fontFamily: "system-ui" }}>
        <h2>Something went wrong</h2>
        <p>Please try again.</p>
        <button
          onClick={() => reset()}
          style={{
            padding: "10px 14px",
            borderRadius: 8,
            border: "1px solid #ccc",
            cursor: "pointer",
          }}
        >
          Try again
        </button>
      </body>
    </html>
  );
}
