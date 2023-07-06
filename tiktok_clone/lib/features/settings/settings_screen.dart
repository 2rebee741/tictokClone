import 'package:flutter/cupertino.dart';
import 'package:flutter/material.dart';
import 'package:provider/provider.dart';
import 'package:tictokclone/common/widgets/video_configuration/video_config.dart';

class SettingsScreen extends StatefulWidget {
  const SettingsScreen({super.key});

  @override
  State<SettingsScreen> createState() => _SettingsScreenState();
}

class _SettingsScreenState extends State<SettingsScreen> {
  bool _notification = false;

  void _onNotificationsChanged(bool? newValue) {
    if (newValue == null) return;
    setState(() {
      _notification = newValue;
    });
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: const Text("Setting"),
      ),
      body: ListView(
        children: [
          SwitchListTile.adaptive(
            value: context.watch<VideoConfig>().isMuted,
            onChanged: (value) => context.read<VideoConfig>().toggleIsMuted(),
            title: const Text("isMuted"),
            subtitle: const Text("Mute sounds"),
          ),
          CupertinoSwitch(
              value: _notification, onChanged: _onNotificationsChanged),
          Switch(value: _notification, onChanged: _onNotificationsChanged),
          Switch.adaptive(
            value: _notification,
            onChanged: _onNotificationsChanged,
          ),
          SwitchListTile.adaptive(
            title: const Text("enable list"),
            value: _notification,
            onChanged: _onNotificationsChanged,
            subtitle: const Text("sub option"),
          ),
          Checkbox(value: _notification, onChanged: _onNotificationsChanged),
          CheckboxListTile(
            activeColor: Colors.black,
            value: _notification,
            onChanged: _onNotificationsChanged,
            title: const Text(
              "Enable notifications",
            ),
          ),
          ListTile(
            onTap: () async {
              final date = await showDatePicker(
                  context: context,
                  initialDate: DateTime.now(),
                  firstDate: DateTime.now(),
                  lastDate: DateTime(2030));
              // print(date);
              final time = await showTimePicker(
                context: context,
                initialTime: TimeOfDay.now(),
              );
              // print(date);
              final booking = await showDateRangePicker(
                  builder: (context, child) {
                    return Theme(
                      data: ThemeData(
                        appBarTheme: const AppBarTheme(
                          foregroundColor: Colors.white,
                          backgroundColor: Colors.black,
                        ),
                      ),
                      child: child!,
                    );
                  },
                  context: context,
                  firstDate: DateTime.now(),
                  lastDate: DateTime(2030));
              // print(booking);
            },
            title: const Text("What is your birthday?"),
          ),
          ListTile(
            title: const Text("Logout(ios)"),
            textColor: Colors.red,
            onTap: () {
              showCupertinoDialog(
                context: context,
                builder: (context) => CupertinoAlertDialog(
                  title: const Text("Are you sure?"),
                  content: const Text("please don't"),
                  actions: [
                    CupertinoDialogAction(
                      onPressed: () => Navigator.of(context).pop(),
                      child: const Text("no"),
                    ),
                    CupertinoDialogAction(
                      onPressed: () => Navigator.of(context).pop(),
                      isDefaultAction: true,
                      child: const Text("YES"),
                    ),
                  ],
                ),
              );
            },
          ),
          ListTile(
            title: const Text("Logout action sheet bottom"),
            textColor: Colors.red,
            onTap: () {
              showCupertinoModalPopup(
                context: context,
                builder: (context) => CupertinoActionSheet(
                  title: const Text("Are you sure?"),
                  message: const Text("pls"),
                  actions: [
                    CupertinoActionSheetAction(
                      isDefaultAction: true,
                      onPressed: () => Navigator.of(context).pop(),
                      child: const Text("NO"),
                    ),
                    CupertinoActionSheetAction(
                      onPressed: () => Navigator.of(context).pop(),
                      isDestructiveAction: true,
                      child: const Text("YES"),
                    ),
                  ],
                ),
              );
            },
          ),
          const AboutListTile(
            applicationVersion: "1.0",
            applicationLegalese: "dont copy me ",
          ),
        ],
      ),
    );
  }
}
