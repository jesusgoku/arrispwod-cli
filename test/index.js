const { spawn } = require('child_process');
const { expect } = require('chai');

describe('Test cli application', () => {
  it('Without parameters', () => new Promise(resolve => {
      const cp = spawn('./src/index.js');

      cp.on('exit', (code, signal) => {
        expect(code).to.equal(0);
        expect(signal).to.be.null;
        resolve();
      });
  }));

  it('With custom data', () => new Promise(resolve => {
    const cp = spawn('./src/index.js', ['2018-04-22']);

    cp.stdout.on('data', data => expect(String(data).trim()).to.equal('ZOU3MWLZKX'));

    cp.on('exit', (code, signal) => {
      expect(code).to.equal(0);
      expect(signal).to.be.null;
      resolve();
    });
  }));

  it('With custom date and seed', () => new Promise(resolve => {
    const cp = spawn('./src/index.js', ['2018-04-22', '--seed', 'vtr2014']);

    cp.stdout.on('data', data => expect(String(data).trim()).to.equal('Y20E72FQ9I'));

    cp.on('exit', (code, signal) => {
      expect(code).to.equal(0);
      expect(signal).to.be.null;
      resolve();
    });
  }));

  it('Check version', () => new Promise(resolve => {
    const cp = spawn('./src/index.js', ['--version']);

    cp.stdout.on('data', data => expect(String(data).trim()).to.equal('1.0.0'));

    cp.on('exit', (code, signal) => {
      expect(code).to.equal(0);
      expect(signal).to.be.null;
      resolve();
    });
  }));

  it('Check help', () => new Promise(resolve => {
    const cp = spawn('./src/index.js', ['--help']);

    cp.stdout.on('data', data => expect(String(data).trim()).to.have.string('Usage'));

    cp.on('exit', (code, signal) => {
      expect(code).to.equal(0);
      expect(signal).to.be.null;
      resolve();
    });
  }));
});
