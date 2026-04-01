import React from 'react';
import './FamilyTree.css';

export default function FamilyTree() {
  return (
    <div className="family-tree-page px-6">
      <header className="page-header text-center">
        <h1 className="hero-title text-outline">Heritage Archive</h1>
        <p className="hero-subtitle mx-auto">Tracing the roots of Gramya Sangam across generations.</p>
      </header>

      <div className="tree-container">
        <div className="tree-node root-node">
          <div className="node-avatar">G</div>
          <div className="node-info">
            <strong>First Settlers</strong>
            <span>1842</span>
          </div>
        </div>
        
        <div className="tree-branches">
          <div className="tree-branch">
            <div className="tree-line"></div>
            <div className="tree-node child-node">
              <div className="node-avatar">R</div>
              <div className="node-info">
                <strong>Vaidya Rajesh's Lineage</strong>
                <span>Healer Family</span>
              </div>
            </div>
            
            <div className="tree-branches sub-branch">
              <div className="tree-branch">
                <div className="tree-line horizontal"></div>
                <div className="tree-node grandchild-node">
                  <div className="node-avatar">A</div>
                  <div className="node-info">
                    <strong>Ananya</strong>
                    <span>Teacher · Age 25</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="tree-branch">
            <div className="tree-line"></div>
            <div className="tree-node child-node">
              <div className="node-avatar">B</div>
              <div className="node-info">
                <strong>Baba Ram Singh Lineage</strong>
                <span>Elder Council</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
