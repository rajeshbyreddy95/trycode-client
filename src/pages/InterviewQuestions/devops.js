export const devopsquestions = {
  "theory": [
    {
      "id": "devops-theory-1",
      "title": "What is DevOps?",
      "content": "DevOps is a set of practices that combines software development (Dev) and IT operations (Ops) to shorten the development lifecycle, improve collaboration, and deliver high-quality software continuously. It emphasizes automation, continuous integration, and monitoring."
    },
    {
      "id": "devops-theory-2",
      "title": "What are the key benefits of DevOps?",
      "content": "The key benefits of DevOps include faster time to market with continuous delivery, improved collaboration between Dev and Ops teams, enhanced quality through automated testing, increased reliability with monitoring and feedback, and scalability through infrastructure automation."
    },
    {
      "id": "devops-theory-3",
      "title": "What is the difference between DevOps and Agile?",
      "content": "Agile focuses on iterative software development with short cycles, such as sprints, emphasizing adaptability and customer feedback. DevOps extends Agile by integrating development and operations, focusing on automation, continuous delivery, and collaboration to streamline the entire software lifecycle."
    },
    {
      "id": "devops-theory-4",
      "title": "What is Continuous Integration (CI)?",
      "content": "Continuous Integration (CI) is a DevOps practice where developers frequently integrate code into a shared repository, often multiple times a day. Each integration is automatically built and tested to detect issues early, ensuring code quality and reducing integration problems."
    },
    {
      "id": "devops-theory-5",
      "title": "What is Continuous Deployment (CD)?",
      "content": "Continuous Deployment (CD) is the practice of automatically deploying every code change that passes automated tests to production, ensuring rapid and reliable releases without manual intervention."
    },
    {
      "id": "devops-theory-6",
      "title": "What is the difference between CI and CD?",
      "content": "Continuous Integration (CI) focuses on integrating and testing code frequently to catch issues early, while Continuous Deployment (CD) extends CI by automatically deploying tested code to production or staging environments, enabling faster and more reliable releases."
    },
    {
      "id": "devops-theory-7",
      "title": "What is Infrastructure as Code (IaC)?",
      "content": "Infrastructure as Code (IaC) is the practice of managing infrastructure, such as servers and networks, using code and automation tools. It allows for version control, consistency, and scalability by defining infrastructure in a declarative or programmatic way."
    },
    {
      "id": "devops-theory-8",
      "title": "What are the benefits of Infrastructure as Code?",
      "content": "Benefits of Infrastructure as Code include consistency by reducing configuration drift, scalability through easy replication of environments, versioning to track changes, automation to minimize manual errors, and faster provisioning of resources."
    },
    {
      "id": "devops-theory-9",
      "title": "What is the difference between Terraform and Ansible?",
      "content": "Terraform is a declarative tool focused on provisioning infrastructure, such as creating servers or networks, while Ansible is a procedural tool focused on configuration management, such as installing software or managing server settings."
    },
    {
      "id": "devops-theory-10",
      "title": "What is Docker?",
      "content": "Docker is a platform for developing, shipping, and running applications inside containers. Containers package an application with its dependencies, ensuring consistency across development, testing, and production environments."
    },
    {
      "id": "devops-theory-11",
      "title": "What is the difference between a Docker image and a Docker container?",
      "content": "A Docker image is a lightweight, immutable template that includes the application code, dependencies, and runtime. A Docker container is a running instance of a Docker image, isolated and executable, created from the image to run the application."
    },
    {
      "id": "devops-theory-12",
      "title": "What is Docker Compose?",
      "content": "Docker Compose is a tool for defining and running multi-container Docker applications. It simplifies managing multiple containers by allowing you to define services, networks, and volumes in a single configuration file, making it easier to orchestrate applications."
    },
    {
      "id": "devops-theory-13",
      "title": "What is Kubernetes?",
      "content": "Kubernetes, often abbreviated as K8s, is an open-source platform for automating the deployment, scaling, and management of containerized applications. It orchestrates containers across a cluster of nodes, ensuring high availability and scalability."
    },
    {
      "id": "devops-theory-14",
      "title": "What is the difference between Docker and Kubernetes?",
      "content": "Docker creates and runs containers on a single host, focusing on containerization. Kubernetes orchestrates containers across multiple hosts, managing scaling, networking, and failover to ensure applications run reliably in a cluster."
    },
    {
      "id": "devops-theory-15",
      "title": "What are Kubernetes Pods?",
      "content": "A Kubernetes Pod is the smallest deployable unit in Kubernetes, consisting of one or more containers that share storage, network, and a specification for how to run. Pods are designed to run tightly coupled containers that need to work together."
    },
    {
      "id": "devops-theory-16",
      "title": "What is a Kubernetes Deployment?",
      "content": "A Kubernetes Deployment is a resource that manages a set of Pods, ensuring the desired number of replicas are running. It handles updates, such as rolling updates, with zero downtime, making it ideal for stateless applications."
    },
    {
      "id": "devops-theory-17",
      "title": "What is a Kubernetes Service?",
      "content": "A Kubernetes Service is an abstraction that defines a logical set of Pods and a policy to access them, often providing load balancing. It ensures stable access to Pods by assigning a consistent IP and DNS name, even as Pods are created or destroyed."
    },
    {
      "id": "devops-theory-18",
      "title": "What are the types of Kubernetes Services?",
      "content": "Kubernetes Services include ClusterIP, which exposes the service within the cluster; NodePort, which exposes the service on a specific port of each node; LoadBalancer, which exposes the service externally using a cloud provider’s load balancer; and ExternalName, which maps a service to an external DNS name."
    },
    {
      "id": "devops-theory-19",
      "title": "What is a Kubernetes Ingress?",
      "content": "Kubernetes Ingress is a resource that manages external access to services, typically HTTP or HTTPS, by defining rules for routing traffic to different services based on hostnames or paths, often requiring an Ingress controller to function."
    },
    {
      "id": "devops-theory-20",
      "title": "What is the difference between a Kubernetes Deployment and a StatefulSet?",
      "content": "A Kubernetes Deployment manages stateless applications where Pods are interchangeable, focusing on scaling and updates. A StatefulSet manages stateful applications, ensuring Pods have stable identities, persistent storage, and ordered deployment."
    },
    {
      "id": "devops-theory-21",
      "title": "What is a Kubernetes ConfigMap?",
      "content": "A Kubernetes ConfigMap is a resource used to store non-sensitive configuration data as key-value pairs. It can be injected into Pods as environment variables, files, or command-line arguments, decoupling configuration from the application."
    },
    {
      "id": "devops-theory-22",
      "title": "What is a Kubernetes Secret?",
      "content": "A Kubernetes Secret is a resource used to store sensitive data, such as passwords or API keys, in an encoded format. It can be mounted as volumes or exposed as environment variables in Pods, with better access control than ConfigMaps."
    },
    {
      "id": "devops-theory-23",
      "title": "What is the difference between ConfigMap and Secret in Kubernetes?",
      "content": "A ConfigMap stores non-sensitive configuration data in plain text, suitable for general settings. A Secret stores sensitive data, encoded in base64, with stricter access controls, making it ideal for credentials and keys."
    },
    {
      "id": "devops-theory-24",
      "title": "What is a Kubernetes Namespace?",
      "content": "A Kubernetes Namespace is a mechanism to divide cluster resources between multiple users, teams, or projects. It provides a scope for names, helping to organize and isolate resources within a cluster."
    },
    {
      "id": "devops-theory-25",
      "title": "What is Helm in Kubernetes?",
      "content": "Helm is a package manager for Kubernetes that simplifies the deployment and management of applications. It uses pre-configured packages called Helm Charts to define, install, and upgrade Kubernetes applications."
    },
    {
      "id": "devops-theory-26",
      "title": "What is a Helm Chart?",
      "content": "A Helm Chart is a collection of files that describe a Kubernetes application, including templates, configuration values, and dependencies. It acts as a package that Helm uses to deploy and manage applications on Kubernetes."
    },
    {
      "id": "devops-theory-27",
      "title": "What is the difference between Kubernetes and Helm?",
      "content": "Kubernetes is a container orchestration platform that manages clusters and deploys containers. Helm is a package manager for Kubernetes, simplifying application deployment and management by packaging resources into reusable charts."
    },
    {
      "id": "devops-theory-28",
      "title": "What is monitoring in DevOps?",
      "content": "Monitoring in DevOps involves continuously observing system performance, availability, and health to detect issues, ensure uptime, and optimize performance. It typically includes tracking metrics like CPU usage, memory, and response times."
    },
    {
      "id": "devops-theory-29",
      "title": "What is the difference between Prometheus and Grafana?",
      "content": "Prometheus is a monitoring and alerting toolkit that collects and stores metrics, focusing on time-series data. Grafana is a visualization tool that creates dashboards and graphs from data sources like Prometheus, focusing on data presentation."
    },
    {
      "id": "devops-theory-30",
      "title": "What is logging in DevOps?",
      "content": "Logging in DevOps involves collecting, storing, and analyzing log data from applications and infrastructure to troubleshoot issues, monitor performance, and ensure security. Logs provide historical data for debugging and auditing."
    },
    {
      "id": "devops-theory-31",
      "title": "What is the ELK Stack?",
      "content": "The ELK Stack is a set of tools for logging, consisting of Elasticsearch, which stores and indexes logs; Logstash, which processes and transforms logs; and Kibana, which visualizes logs and creates dashboards for analysis."
    },
    {
      "id": "devops-theory-32",
      "title": "What is the difference between monitoring and logging?",
      "content": "Monitoring focuses on real-time metrics, such as CPU usage or response time, to detect immediate issues. Logging focuses on historical data, such as error logs or access logs, to analyze past events and troubleshoot problems."
    },
    {
      "id": "devops-theory-33",
      "title": "What is GitOps?",
      "content": "GitOps is a DevOps practice that uses Git as the single source of truth for infrastructure and application deployment. Changes are made via pull requests, and automation tools apply those changes to the system, ensuring consistency."
    },
    {
      "id": "devops-theory-34",
      "title": "What is the difference between DevOps and GitOps?",
      "content": "DevOps is a broad practice focusing on collaboration, automation, and continuous delivery. GitOps is a specific DevOps approach that uses Git as the source of truth for deployments, emphasizing declarative infrastructure management."
    },
    {
      "id": "devops-theory-35",
      "title": "What is Jenkins?",
      "content": "Jenkins is an open-source automation server used for Continuous Integration and Continuous Deployment. It automates building, testing, and deploying code, supporting a wide range of plugins for customization."
    },
    {
      "id": "devops-theory-36",
      "title": "What is the difference between Jenkins and GitLab CI?",
      "content": "Jenkins is a standalone CI/CD tool, highly customizable with plugins, but requires more setup. GitLab CI is integrated into GitLab, uses a simpler YAML-based configuration, and is tightly coupled with GitLab’s version control."
    },
    {
      "id": "devops-theory-37",
      "title": "What is Ansible?",
      "content": "Ansible is an open-source tool for configuration management, application deployment, and task automation. It uses simple, human-readable playbooks to define tasks and manages infrastructure without requiring agents."
    },
    {
      "id": "devops-theory-38",
      "title": "What is the difference between Ansible and Chef?",
      "content": "Ansible is agentless, uses SSH for communication, and relies on simple YAML playbooks, making it easier to set up. Chef is agent-based, requires a master server, and uses Ruby-based recipes, which can be more complex."
    },
    {
      "id": "devops-theory-39",
      "title": "What is Terraform?",
      "content": "Terraform is an open-source Infrastructure as Code tool by HashiCorp. It allows you to define and provision infrastructure using declarative configuration files, supporting multiple cloud providers and services."
    },
    {
      "id": "devops-theory-40",
      "title": "What is the difference between Terraform and CloudFormation?",
      "content": "Terraform is multi-cloud, declarative, and open-source, supporting various providers with a consistent syntax. CloudFormation is AWS-specific, also declarative, but limited to AWS services, using JSON or YAML for configuration."
    },
    {
      "id": "devops-theory-41",
      "title": "What is a CI/CD pipeline?",
      "content": "A CI/CD pipeline is a series of automated steps that take code from version control to production. It typically includes stages like building the code, running tests, and deploying to environments, ensuring a streamlined release process."
    },
    {
      "id": "devops-theory-42",
      "title": "What is Blue-Green Deployment?",
      "content": "Blue-Green Deployment is a release strategy where two identical environments, Blue and Green, are maintained. The new version is deployed to the Green environment, and traffic is switched once verified, reducing downtime and risk."
    },
    {
      "id": "devops-theory-43",
      "title": "What is Canary Deployment?",
      "content": "Canary Deployment is a strategy where a new version is rolled out to a small subset of users first. If successful, it’s gradually rolled out to all users, minimizing risk by monitoring the new version’s performance."
    },
    {
      "id": "devops-theory-44",
      "title": "What is the difference between Blue-Green and Canary Deployment?",
      "content": "Blue-Green Deployment uses two full environments and switches traffic instantly, ensuring zero downtime. Canary Deployment rolls out changes gradually to a subset of users, monitoring impact before a full rollout, reducing risk."
    },
    {
      "id": "devops-theory-45",
      "title": "What is a Rolling Update in Kubernetes?",
      "content": "A Rolling Update in Kubernetes gradually replaces old Pods with new ones, ensuring zero downtime by updating a few Pods at a time while maintaining application availability throughout the process."
    },
    {
      "id": "devops-theory-46",
      "title": "What is the difference between Rolling Update and Recreate strategy in Kubernetes?",
      "content": "Rolling Update gradually replaces Pods to ensure availability during updates, avoiding downtime. Recreate strategy terminates all old Pods before creating new ones, which can cause downtime but is simpler for certain applications."
    },
    {
      "id": "devops-theory-47",
      "title": "What is AWS in the context of DevOps?",
      "content": "AWS, or Amazon Web Services, provides cloud infrastructure for DevOps practices, offering services like compute, storage, and CI/CD tools, enabling scalable and automated deployments in a cloud environment."
    },
    {
      "id": "devops-theory-48",
      "title": "What is AWS CodePipeline?",
      "content": "AWS CodePipeline is a CI/CD service that automates the build, test, and deployment phases of a release process, integrating with other AWS services to streamline software delivery."
    },
    {
      "id": "devops-theory-49",
      "title": "What is the difference between AWS CodePipeline and Jenkins?",
      "content": "AWS CodePipeline is a fully managed, AWS-native CI/CD service with seamless AWS integration. Jenkins is an open-source, standalone tool, highly customizable but requires more setup and maintenance."
    },
    {
      "id": "devops-theory-50",
      "title": "What is Azure DevOps?",
      "content": "Azure DevOps is a Microsoft platform providing tools for CI/CD, version control, testing, and project management, integrating with Azure cloud services to support the entire software development lifecycle."
    },
    {
      "id": "devops-theory-51",
      "title": "What is the difference between Azure DevOps and GitLab CI?",
      "content": "Azure DevOps is a comprehensive platform with project management, testing, and CI/CD capabilities. GitLab CI is focused on CI/CD, integrated with GitLab’s version control, offering a more streamlined experience."
    },
    {
      "id": "devops-theory-52",
      "title": "What is GitHub Actions?",
      "content": "GitHub Actions is a CI/CD platform integrated into GitHub, allowing you to automate workflows like building, testing, and deploying code, triggered by repository events such as pushes or pull requests."
    },
    {
      "id": "devops-theory-53",
      "title": "What is the difference between GitHub Actions and Jenkins?",
      "content": "GitHub Actions is integrated with GitHub, serverless, and uses a simpler configuration. Jenkins is a standalone tool, requiring server setup, but offers more customization through plugins."
    },
    {
      "id": "devops-theory-54",
      "title": "What is a container registry?",
      "content": "A container registry is a repository for storing and managing container images, such as Docker images. It enables teams to share, version, and deploy containerized applications across environments."
    },
    {
      "id": "devops-theory-55",
      "title": "What is the difference between Docker Hub and AWS ECR?",
      "content": "Docker Hub is a public registry, general-purpose, with a free tier for storing container images. AWS ECR is a private registry, managed by AWS, designed for secure integration with AWS services."
    },
    {
      "id": "devops-theory-56",
      "title": "What is serverless architecture in DevOps?",
      "content": "Serverless architecture in DevOps allows running applications without managing servers. Cloud providers handle scaling, provisioning, and maintenance, while developers focus on writing code for event-driven functions."
    },
    {
      "id": "devops-theory-57",
      "title": "What is the difference between serverless and containers?",
      "content": "Serverless is fully managed, event-driven, with no server management, ideal for short-lived tasks. Containers offer more control, requiring you to manage the container runtime, suitable for long-running applications."
    },
    {
      "id": "devops-theory-58",
      "title": "What is a microservices architecture?",
      "content": "Microservices architecture structures an application as a collection of small, independent services that communicate over APIs, allowing for scalability, flexibility, and independent deployment of each service."
    },
    {
      "id": "devops-theory-59",
      "title": "What is the difference between monolithic and microservices architecture?",
      "content": "Monolithic architecture is a single, tightly-coupled application, harder to scale and deploy. Microservices architecture consists of multiple independent services, easier to scale and deploy independently, but more complex to manage."
    },
    {
      "id": "devops-theory-60",
      "title": "What is a service mesh?",
      "content": "A service mesh is a dedicated infrastructure layer for managing service-to-service communication in a microservices architecture, handling concerns like load balancing, security, and monitoring."
    },
    {
      "id": "devops-theory-61",
      "title": "What is Istio in the context of a service mesh?",
      "content": "Istio is an open-source service mesh that provides traffic management, security features like mutual TLS, observability, and policy enforcement for microservices, often integrated with Kubernetes."
    },
    {
      "id": "devops-theory-62",
      "title": "What is the difference between Istio and Linkerd?",
      "content": "Istio is feature-rich, complex, and supports multiple platforms, offering extensive traffic management and security features. Linkerd is lightweight, simpler, and focused on Kubernetes, with a smaller footprint."
    },
    {
      "id": "devops-theory-63",
      "title": "What is observability in DevOps?",
      "content": "Observability in DevOps refers to the ability to understand a system’s internal state through its external outputs, using metrics, logs, and traces to debug issues and optimize performance."
    },
    {
      "id": "devops-theory-64",
      "title": "What is distributed tracing?",
      "content": "Distributed tracing tracks requests across microservices to identify latency, errors, and dependencies, providing visibility into the flow of requests through a distributed system."
    },
    {
      "id": "devops-theory-65",
      "title": "What is the difference between monitoring and observability?",
      "content": "Monitoring tracks predefined metrics to detect known issues, focusing on system health. Observability provides deeper insights into unknown issues by combining metrics, logs, and traces for comprehensive analysis."
    },
    {
      "id": "devops-theory-66",
      "title": "What is a reverse proxy in DevOps?",
      "content": "A reverse proxy in DevOps sits between clients and servers, forwarding requests to backend services, providing load balancing, caching, and security features to improve performance and reliability."
    },
    {
      "id": "devops-theory-67",
      "title": "What is the difference between Nginx and HAProxy?",
      "content": "Nginx is a web server with reverse proxy capabilities, excelling in caching and serving static content. HAProxy is a high-performance TCP/HTTP load balancer, focused on efficient proxying and load balancing."
    },
    {
      "id": "devops-theory-68",
      "title": "What is load balancing in DevOps?",
      "content": "Load balancing distributes incoming network traffic across multiple servers to ensure availability, reliability, and scalability, preventing any single server from becoming overwhelmed."
    },
    {
      "id": "devops-theory-69",
      "title": "What is the difference between hardware and software load balancing?",
      "content": "Hardware load balancing uses dedicated devices, which are expensive but high-performing. Software load balancing uses software solutions, which are cost-effective, flexible, and easier to configure."
    },
    {
      "id": "devops-theory-70",
      "title": "What is auto-scaling in DevOps?",
      "content": "Auto-scaling automatically adjusts the number of compute resources based on demand, ensuring performance and cost-efficiency by scaling up during high traffic and down during low traffic."
    },
    {
      "id": "devops-theory-71",
      "title": "What is the difference between horizontal and vertical scaling?",
      "content": "Horizontal scaling adds more instances to handle load, such as adding more servers. Vertical scaling increases resources of existing instances, such as adding more CPU or memory to a server."
    },
    {
      "id": "devops-theory-72",
      "title": "What is a message queue in DevOps?",
      "content": "A message queue is a system for asynchronous communication between services, allowing them to send and receive messages reliably, decoupling producers and consumers for better scalability."
    },
    {
      "id": "devops-theory-73",
      "title": "What is the difference between RabbitMQ and Kafka?",
      "content": "RabbitMQ is a traditional message broker, ideal for task queues and supporting multiple protocols. Kafka is a distributed streaming platform, designed for high-throughput event streaming and data processing."
    },
    {
      "id": "devops-theory-74",
      "title": "What is Infrastructure Monitoring?",
      "content": "Infrastructure Monitoring tracks the health and performance of servers, networks, and other infrastructure components, focusing on metrics like CPU usage, memory, and disk space to ensure system reliability."
    },
    {
      "id": "devops-theory-75",
      "title": "What is Application Performance Monitoring (APM)?",
      "content": "Application Performance Monitoring (APM) tracks the performance of applications, focusing on metrics like response times, error rates, and resource usage to ensure optimal application behavior."
    },
    {
      "id": "devops-theory-76",
      "title": "What is the difference between infrastructure monitoring and APM?",
      "content": "Infrastructure monitoring focuses on servers, networks, and hardware metrics, ensuring system stability. APM focuses on application performance, such as latency and error rates, to optimize user experience."
    },
    {
      "id": "devops-theory-77",
      "title": "What is a disaster recovery plan in DevOps?",
      "content": "A disaster recovery plan in DevOps outlines procedures to recover from failures, such as data loss or outages, including strategies like backups, replication, and failover to minimize downtime."
    },
    {
      "id": "devops-theory-78",
      "title": "What is High Availability (HA) in DevOps?",
      "content": "High Availability (HA) ensures systems remain operational with minimal downtime by using redundancy, failover mechanisms, and load balancing, often across multiple regions or zones."
    },
    {
      "id": "devops-theory-79",
      "title": "What is the difference between High Availability and Disaster Recovery?",
      "content": "High Availability prevents downtime through redundancy and failover, ensuring continuous operation. Disaster Recovery focuses on recovering after a failure using backups and failover strategies."
    },
    {
      "id": "devops-theory-80",
      "title": "What is a CDN in DevOps?",
      "content": "A Content Delivery Network (CDN) is a network of distributed servers that cache content closer to users, reducing latency and improving performance for web applications and media delivery."
    },
    {
      "id": "devops-theory-81",
      "title": "What is the difference between Cloudflare and AWS CloudFront?",
      "content": "Cloudflare is a global CDN with additional security features like DDoS protection and a focus on performance. AWS CloudFront is an AWS-native CDN, designed for seamless integration with AWS services."
    },
    {
      "id": "devops-theory-82",
      "title": "What is Infrastructure Automation?",
      "content": "Infrastructure Automation in DevOps uses tools to provision, configure, and manage infrastructure programmatically, reducing manual effort and ensuring consistency across environments."
    },
    {
      "id": "devops-theory-83",
      "title": "What is Configuration Drift?",
      "content": "Configuration Drift occurs when infrastructure configurations diverge from their intended state due to manual changes or inconsistencies, leading to potential issues in reliability and performance."
    },
    {
      "id": "devops-theory-84",
      "title": "What is Chaos Engineering?",
      "content": "Chaos Engineering is the practice of intentionally introducing failures into a system to test its resilience, identify weaknesses, and ensure it can handle unexpected disruptions."
    },
    {
      "id": "devops-theory-85",
      "title": "What is the difference between Chaos Engineering and Load Testing?",
      "content": "Chaos Engineering tests resilience by injecting failures, such as shutting down servers. Load Testing tests performance under high load, simulating heavy traffic to evaluate system capacity."
    },
    {
      "id": "devops-theory-86",
      "title": "What is a Service Level Agreement (SLA)?",
      "content": "A Service Level Agreement (SLA) is a contract defining the expected level of service between a provider and a customer, including metrics like uptime, response time, and support availability."
    },
    {
      "id": "devops-theory-87",
      "title": "What is a Service Level Objective (SLO)?",
      "content": "A Service Level Objective (SLO) is a target value for a service metric, such as 99.9% availability, within an SLA, used to measure and ensure performance meets expectations."
    },
    {
      "id": "devops-theory-88",
      "title": "What is a Service Level Indicator (SLI)?",
      "content": "A Service Level Indicator (SLI) is a measurable metric, such as latency or error rate, used to evaluate whether an SLO is being met, providing concrete data for performance assessment."
    },
    {
      "id": "devops-theory-89",
      "title": "What is the difference between SLA, SLO, and SLI?",
      "content": "An SLA is a contract with customers, defining service expectations. An SLO is an internal target for a metric within the SLA. An SLI is the measured metric used to evaluate if the SLO is met."
    },
    {
      "id": "devops-theory-90",
      "title": "What is a Build Artifact?",
      "content": "A Build Artifact is the output of a build process, such as a compiled binary or container image, that is stored and used in later stages of the CI/CD pipeline, like testing or deployment."
    },
    {
      "id": "devops-theory-91",
      "title": "What is Dependency Management in DevOps?",
      "content": "Dependency Management in DevOps ensures that applications have the correct libraries and versions, managing dependencies to avoid conflicts and ensure consistent builds across environments."
    },
    {
      "id": "devops-theory-92",
      "title": "What is a Zero Downtime Deployment?",
      "content": "Zero Downtime Deployment ensures that an application remains available during updates, using strategies like rolling updates, blue-green deployments, or canary deployments to avoid interruptions."
    },
    {
      "id": "devops-theory-93",
      "title": "What is a Feature Flag?",
      "content": "A Feature Flag is a technique to enable or disable features in an application without deploying new code, allowing for controlled rollouts, A/B testing, and gradual feature adoption."
    },
    {
      "id": "devops-theory-94",
      "title": "What is Infrastructure Testing?",
      "content": "Infrastructure Testing validates the infrastructure setup, such as servers and networks, to ensure it matches the desired configuration, often using automated tools to check for consistency."
    },
    {
      "id": "devops-theory-95",
      "title": "What is the difference between Infrastructure Testing and Application Testing?",
      "content": "Infrastructure Testing validates servers, networks, and configurations, ensuring the environment is set up correctly. Application Testing validates the application logic, APIs, and user interface."
    },
    {
      "id": "devops-theory-96",
      "title": "What is Security in DevOps (DevSecOps)?",
      "content": "DevSecOps integrates security practices into the DevOps pipeline, ensuring security at every stage, from code scanning to vulnerability management, to build secure software faster."
    },
    {
      "id": "devops-theory-97",
      "title": "What is the difference between DevOps and DevSecOps?",
      "content": "DevOps focuses on collaboration, automation, and CI/CD to streamline development. DevSecOps extends DevOps by embedding security practices throughout the pipeline, prioritizing secure delivery."
    },
    {
      "id": "devops-theory-98",
      "title": "What is a Vulnerability Scan in DevOps?",
      "content": "A Vulnerability Scan in DevOps identifies security weaknesses in code, dependencies, or infrastructure, helping teams address potential risks before deployment."
    },
    {
      "id": "devops-theory-99",
      "title": "What is a Post-Mortem in DevOps?",
      "content": "A Post-Mortem in DevOps is a process of analyzing an incident after it occurs to identify root causes, document lessons learned, and implement fixes to prevent future occurrences."
    },
    {
      "id": "devops-theory-100",
      "title": "What is a Runbook in DevOps?",
      "content": "A Runbook in DevOps is a documented set of procedures for routine operations or incident response, ensuring consistency and reducing errors during system maintenance or troubleshooting."
    }
  ]
}