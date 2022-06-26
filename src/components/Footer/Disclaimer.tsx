import React from 'react';

const disclaimer = 'A really long text';

export default function Disclaimer() {
  return (
    <div className="mb-6">
      <p>
        {disclaimer}
      </p>
    </div>
  );
}
