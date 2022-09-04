import React, { useState, useEffect } from 'react';
export default function Error() {
  useEffect(() => {
    document.title = `Error|Page Not Found`;
  });
  return (
    <div className="alert alert-danger p-5">
        <h1>404 Not Found Page</h1>
    </div>
  )
}
