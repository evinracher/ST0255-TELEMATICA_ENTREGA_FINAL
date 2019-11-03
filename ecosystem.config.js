module.exports = {
  apps: [{
    name: 'surveys',
    script: './index.js'
  }],
  deploy: {
    production: {
      user: 'ubuntu',
      host: 'ec2-54-208-108-170.compute-1.amazonaws.com',
      key: '~/.ssh/telematics_project_2019.pem',
      ref: 'origin/master',
      repo: 'git@github.com:evinracher/ST0255-TELEMATICA_ENTREGA_FINAL.git',
      path: '/home/ubuntu/ST0255-TELEMATICA_ENTREGA_FINAL',
      'post-deploy': 'npm install && pm2 startOrRestart ecosystem.config.js'
    }
  }
}
