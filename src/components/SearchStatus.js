import React from 'react';

export default function SearchStatus() {
  return (
    <div className="btn-group d-flex justify-content-end">
      <input type="radio" className="btn-check" />
      <label className="btn btn-outline-secondary">
        <i className="fa-solid fa-list-ul" />
      </label>
      <input type="radio" className="btn-check" />
      <label className="btn btn-outline-secondary">
        <i className="fa-solid fa-clipboard-check" />
      </label>
      <input type="radio" className="btn-check" />
      <label className="btn btn-outline-secondary">
        <i className="fa-solid fa-clipboard" />
      </label>
    </div>
  );
}
