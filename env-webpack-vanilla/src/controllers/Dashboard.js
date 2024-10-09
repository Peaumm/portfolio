import viewOverflow from '../views/overflow';
import viewInfo from '../views/info';
import viewProjects from '../views/projects';
import viewButtons from '../views/buttons';

const Dashboard = class Dashboard {
  constructor(params) {
    this.el = document.querySelector('#root');
    this.params = params;
    this.data = [];

    this.run();
  }

  async render() {
    return `
      <div>${viewOverflow()}</div>
      <div>${viewInfo()}</div>
      <div>${viewButtons()}</div>
      <div>${viewProjects()}</div>
    `;
  }

  async run() {
    this.el.innerHTML = await this.render();
  }
};

export default Dashboard;
