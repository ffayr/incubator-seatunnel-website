---
sidebar_position: 2
---

# Intro to config file

In SeaTunnel, the most important thing is the Config file, through which users can customize their own data
synchronization requirements to maximize the potential of SeaTunnel. So next, I will introduce you how to
configure the Config file.

## Example

Before you read on, you can find config file
examples [here](https://github.com/apache/incubator-seatunnel/tree/dev/config) and in distribute package's
config directory.

## Config file structure

The Config file will be similar to the one below.

```hocon
env {
  execution.parallelism = 1
}

source {
  FakeSource {
    result_table_name = "fake"
    field_name = "name,age"
  }
}

transform {
  sql {
    sql = "select name,age from fake"
  }
}

sink {
  Clickhouse {
    host = "clickhouse:8123"
    database = "default"
    table = "seatunnel_console"
    fields = ["name"]
    username = "default"
    password = ""
  }
}
```

As you can see, the Config file contains several sections: env, source, transform, sink. Different modules
have different functions. After you understand these modules, you will understand how SeaTunnel works.

### env

Used to add some engine optional parameters, no matter which engine (Spark or Flink), the corresponding
optional parameters should be filled in here.

<!-- TODO add supported env parameters -->

### source

source is used to define where SeaTunnel needs to fetch data, and use the fetched data for the next step.
Multiple sources can be defined at the same time. The supported source at now
check [Source of SeaTunnel](../connector/source). Each source has its own specific parameters to define how to
fetch data, and SeaTunnel also extracts the parameters that each source will use, such as
the `result_table_name` parameter, which is used to specify the name of the data generated by the current
source, which is convenient for follow-up used by other modules.

### transform

When we have the data source, we may need to further process the data, so we have the transform module. Of
course, this uses the word 'may', which means that we can also directly treat the transform as non-existent,
directly from source to sink. Like below.

```hocon
transform {
  // no thing on here
}
```

Like source, transform has specific parameters that belong to each module. The supported source at now check.
The supported transform at now check [Transform of SeaTunnel](../transform)

### sink

Our purpose with SeaTunnel is to synchronize data from one place to another, so it is critical to define how
and where data is written. With the sink module provided by SeaTunnel, you can complete this operation quickly
and efficiently. Sink and source are very similar, but the difference is reading and writing. So go check out
our [supported sinks](../connector/sink).

### Other

You will find that when multiple sources and multiple sinks are defined, which data is read by each sink, and
which is the data read by each transform? We use `result_table_name` and `source_table_name` two key
configurations. Each source module will be configured with a `result_table_name` to indicate the name of the
data source generated by the data source, and other transform and sink modules can use `source_table_name` to
refer to the corresponding data source name, indicating that I want to read the data for processing. Then
transform, as an intermediate processing module, can use both `result_table_name` and `source_table_name`
configurations at the same time. But you will find that in the above example Config, not every module is
configured with these two parameters, because in SeaTunnel, there is a default convention, if these two
parameters are not configured, then the generated data from the last module of the previous node will be used.
This is much more convenient when there is only one source.

## What's More

If you want to know the details of this format configuration, Please
see [HOCON](https://github.com/lightbend/config/blob/main/HOCON.md).